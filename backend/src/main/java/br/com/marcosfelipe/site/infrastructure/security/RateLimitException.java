package br.com.marcosfelipe.site.infrastructure.security;

public class RateLimitException extends RuntimeException {

    public RateLimitException(String message) {
        super(message);
    }
}
