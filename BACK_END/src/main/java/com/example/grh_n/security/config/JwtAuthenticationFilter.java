package com.example.grh_n.security.config;

import com.example.grh_n.security.user.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Service // Indicates that this is a Spring-managed service bean
@RequiredArgsConstructor // Constructor-based injection for the two fields
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService; // Injected JWT service instance
    private final MyUserDetailsService userDetailsService; // Injected user details service instance
    private final UserService userService ;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {


//       try {
//          Thread.sleep(500);
//       } catch (InterruptedException e) {
//          e.printStackTrace();
//       }

       final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION); // Extracts the Authorization header
        final String token;
        final String matricule;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) { // If header is null or doesn't start with Bearer prefix
            filterChain.doFilter(request, response); // Proceed to the next filter in the chain
            return;
        }
        token = authHeader.substring(7); // Extracts the token from the header
        matricule = jwtService.extractMatricule(token); // Extracts the matricule from the token

        if (matricule != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // If matricule is not null and there is no existing authentication context
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(matricule);
//            UserDetails userDetails = userService.getByMatricule(matricule);
            // Loads user details by matricule
            if (jwtService.isTokenValid(token, userDetails)) { // Validates the token using the loaded user details
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetailsService.getAuthorities(matricule)
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request) // Adds additional authentication details
                );
                SecurityContextHolder.getContext().setAuthentication(authToken); // Sets the authentication context
            }
        }

       response.setHeader("Access-Control-Allow-Origin", "*");
       response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//       response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        filterChain.doFilter(request,response); // Proceed to the next filter in the chain
    }
}
