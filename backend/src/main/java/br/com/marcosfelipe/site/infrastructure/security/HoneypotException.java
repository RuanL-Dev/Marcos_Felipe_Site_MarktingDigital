package br.com.marcosfelipe.site.infrastructure.security;

public class HoneypotException extends RuntimeException {

    public HoneypotException(String message) {
        super(message);
    }
}
