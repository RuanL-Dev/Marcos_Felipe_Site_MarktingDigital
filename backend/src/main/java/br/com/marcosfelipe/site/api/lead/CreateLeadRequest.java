package br.com.marcosfelipe.site.api.lead;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record CreateLeadRequest(
    @NotBlank
    @Size(max = 100)
    String firstName,

    @NotBlank
    @Size(max = 100)
    String lastName,

    @NotBlank
    @Email
    @Size(max = 160)
    String email,

    @NotBlank
    @Size(max = 30)
    @Pattern(regexp = "^[0-9+()\\-\\s]+$", message = "Telefone invalido.")
    String phone,

    @Size(max = 200)
    String honeypot
) {
}
