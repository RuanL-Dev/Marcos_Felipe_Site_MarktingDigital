package br.com.marcosfelipe.site.shared;

import br.com.marcosfelipe.site.infrastructure.security.HoneypotException;
import br.com.marcosfelipe.site.infrastructure.security.RateLimitException;
import jakarta.validation.ConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleValidation(MethodArgumentNotValidException exception) {
        List<String> details = exception.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(FieldError::getDefaultMessage)
            .toList();

        LOGGER.warn("lead_validation_failed details={}", details);

        return ResponseEntity.badRequest().body(
            new ApiErrorResponse("Dados invalidos.", details, LocalDateTime.now())
        );
    }

    @ExceptionHandler(RateLimitException.class)
    public ResponseEntity<ApiErrorResponse> handleRateLimit(RateLimitException exception) {
        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS).body(
            new ApiErrorResponse(exception.getMessage(), List.of(), LocalDateTime.now())
        );
    }

    @ExceptionHandler(HoneypotException.class)
    public ResponseEntity<ApiErrorResponse> handleHoneypot(HoneypotException exception) {
        LOGGER.warn("lead_honeypot_triggered");

        return ResponseEntity.badRequest().body(
            new ApiErrorResponse(exception.getMessage(), List.of(), LocalDateTime.now())
        );
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ApiErrorResponse> handleConstraintViolation(ConstraintViolationException exception) {
        return ResponseEntity.badRequest().body(
            new ApiErrorResponse(exception.getMessage(), List.of(), LocalDateTime.now())
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse> handleGeneric(Exception exception) {
        LOGGER.error("unexpected_error", exception);

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
            new ApiErrorResponse("Erro interno ao processar a solicitacao.", List.of(), LocalDateTime.now())
        );
    }
}
