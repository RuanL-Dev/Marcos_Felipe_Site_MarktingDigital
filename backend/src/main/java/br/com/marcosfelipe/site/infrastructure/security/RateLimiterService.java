package br.com.marcosfelipe.site.infrastructure.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class RateLimiterService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RateLimiterService.class);

    private final Map<String, RateLimitBucket> buckets = new ConcurrentHashMap<>();
    private final int maxRequests;
    private final Duration windowDuration;

    public RateLimiterService(
        @Value("${app.security.rate-limit.max-requests:5}") int maxRequests,
        @Value("${app.security.rate-limit.window-seconds:60}") long windowSeconds
    ) {
        this.maxRequests = maxRequests;
        this.windowDuration = Duration.ofSeconds(windowSeconds);
    }

    public void checkLimit(String key) {
        String rateKey = (key == null || key.isBlank()) ? "unknown" : key;
        Instant now = Instant.now();
        RateLimitBucket bucket = buckets.compute(rateKey, (ignored, current) -> refreshBucket(current, now));

        if (bucket.requestCount() >= maxRequests) {
          LOGGER.warn("lead_rate_limited key={}", rateKey);
          throw new RateLimitException("Muitas tentativas. Tente novamente em instantes.");
        }

        bucket.increment();
    }

    private RateLimitBucket refreshBucket(RateLimitBucket current, Instant now) {
        if (current == null || current.startedAt().plus(windowDuration).isBefore(now)) {
            return new RateLimitBucket(now);
        }
        return current;
    }

    private static final class RateLimitBucket {
        private final Instant startedAt;
        private int requestCount;

        private RateLimitBucket(Instant startedAt) {
            this.startedAt = startedAt;
            this.requestCount = 0;
        }

        private Instant startedAt() {
            return startedAt;
        }

        private int requestCount() {
            return requestCount;
        }

        private void increment() {
            requestCount++;
        }
    }
}
