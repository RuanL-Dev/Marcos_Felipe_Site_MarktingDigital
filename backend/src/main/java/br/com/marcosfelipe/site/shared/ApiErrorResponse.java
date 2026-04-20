package br.com.marcosfelipe.site.shared;

import java.time.LocalDateTime;
import java.util.List;

public record ApiErrorResponse(
    String message,
    List<String> details,
    LocalDateTime timestamp
) {
}
