package com.example.grh_n.security.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.vote.AffirmativeBased;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;

import java.util.Collection;
import java.util.List;

@Slf4j
public class LoggingAccessDecisionManager extends AffirmativeBased {

    public LoggingAccessDecisionManager(List<AccessDecisionVoter<?>> decisionVoters) {
        super(decisionVoters);
    }

    @Override
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes)
            throws AccessDeniedException, InsufficientAuthenticationException {
        try {
            super.decide(authentication, object, configAttributes);
        } catch (AccessDeniedException e) {
            log.warn("Access denied for user: {}", authentication.getName());
            throw e;
        } catch (InsufficientAuthenticationException e) {
            log.warn("Insufficient authentication for user: {}", authentication.getName());
            throw e;
        }
    }
}
