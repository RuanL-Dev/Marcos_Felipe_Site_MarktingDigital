package br.com.marcosfelipe.site.application.lead;

public record CreateLeadCommand(
    String firstName,
    String lastName,
    String email,
    String phone
) {
}
