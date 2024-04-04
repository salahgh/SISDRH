package com.example.grh_n.security.config;

import com.example.grh_n.security.user.UserRepository_;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@Transactional
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository_ userRepository ;

    public MyUserDetailsService(UserRepository_ userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findById(username).orElseThrow(() -> new EntityNotFoundException("not found"));
    }

    public Collection<? extends GrantedAuthority> getAuthorities(String username) {
        return this.loadUserByUsername(username).getAuthorities();
    }
}
