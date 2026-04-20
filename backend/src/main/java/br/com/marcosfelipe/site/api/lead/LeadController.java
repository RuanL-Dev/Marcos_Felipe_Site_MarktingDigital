package br.com.marcosfelipe.site.api.lead;

import br.com.marcosfelipe.site.application.lead.CreateLeadCommand;
import br.com.marcosfelipe.site.application.lead.CreateLeadResult;
import br.com.marcosfelipe.site.application.lead.CreateLeadService;
import br.com.marcosfelipe.site.infrastructure.security.HoneypotException;
import br.com.marcosfelipe.site.infrastructure.security.RateLimiterService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/leads")
public class LeadController {

    private final CreateLeadService createLeadService;
    private final RateLimiterService rateLimiterService;

    public LeadController(CreateLeadService createLeadService, RateLimiterService rateLimiterService) {
        this.createLeadService = createLeadService;
        this.rateLimiterService = rateLimiterService;
    }

    @PostMapping
    public ResponseEntity<CreateLeadResponse> create(
        @Valid @RequestBody CreateLeadRequest request,
        HttpServletRequest httpServletRequest
    ) {
        if (request.honeypot() != null && !request.honeypot().isBlank()) {
            throw new HoneypotException("Submissao invalida.");
        }

        rateLimiterService.checkLimit(httpServletRequest.getRemoteAddr());

        CreateLeadResult result = createLeadService.execute(
            new CreateLeadCommand(
                request.firstName(),
                request.lastName(),
                request.email(),
                request.phone()
            )
        );

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(new CreateLeadResponse(result.id(), result.message()));
    }
}
