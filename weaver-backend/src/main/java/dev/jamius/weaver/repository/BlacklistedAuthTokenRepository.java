package dev.jamius.weaver.repository;

import dev.jamius.weaver.entity.BlacklistedAuthToken;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlacklistedAuthTokenRepository extends JpaRepository<BlacklistedAuthToken, Long> {
    
    @Cacheable("blacklisted_tokens")
    Optional<BlacklistedAuthToken> findByToken(String token);
}
