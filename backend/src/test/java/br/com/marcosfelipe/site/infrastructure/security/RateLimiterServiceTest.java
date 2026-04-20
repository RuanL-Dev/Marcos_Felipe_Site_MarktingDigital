package br.com.marcosfelipe.site.infrastructure.security;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class RateLimiterServiceTest {

    @Test
    void shouldBlockAfterConfiguredLimit() {
        RateLimiterService service = new RateLimiterService(2, 60);

        service.checkLimit("127.0.0.1");
        service.checkLimit("127.0.0.1");

        assertThrows(RateLimitException.class, () -> service.checkLimit("127.0.0.1"));
    }
}
