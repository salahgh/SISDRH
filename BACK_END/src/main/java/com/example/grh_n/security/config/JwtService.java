// Importing required classes and libraries
package com.example.grh_n.security.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

// Declare a service class for JWT token management



@Service
public class JwtService {

    Integer tokenExpiration = 60 ;

    // Set the secret key for JWT token management
    private static final String SECRET_KEY = "6E3272357538782F413F4428472B4B6250645367566B59703373367639792442";
    private final Logger logger = LoggerFactory.getLogger(this.getClass()) ;
    // Extract the user's matricule from the JWT token
    public String extractMatricule(String jwtToken) {
        return extractClaim(jwtToken, Claims::getSubject);
    }

    // Extract all the claims from the JWT token
    private Claims extractAllClaims(String token){
        return Jwts.parserBuilder()
                .setSigningKey(getSingingKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Extract a specific claim from the JWT token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Set the secret key for JWT token management
    private Key getSingingKey() {
        byte[] signingKey = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(signingKey);
    }

    // Generate a JWT token with additional claims and user details
    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSingingKey(), SignatureAlgorithm.HS256).compact();
    }

    public String refreshJwtToken(String currentToken) {
        // Extract claims from the current token
        Claims claims = this.extractAllClaims(currentToken);
        // Check if the token is expired
        if (isTokenExpired(currentToken)) {
           logger.info("token is expired refreshing it ...");
            // For simplicity, let's assume you just extend the expiration date by a fixed time
            long expirationTime = System.currentTimeMillis() + tokenExpiration * 1000;
            claims.setExpiration(new Date(expirationTime));

            // Re-sign the token with the updated claims
            return Jwts.builder()
                    .setClaims(claims)
                    .signWith(getSingingKey(),SignatureAlgorithm.HS256)
                    .compact();
        } else {
            logger.info("token is still valid no need to refresh");
            return currentToken;
        }
    }

    // Generate a JWT token with user details only
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    // Validate the JWT token for the given user details
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String matricule = extractMatricule(token);
        boolean b = matricule.equals(userDetails.getUsername()) && !isTokenExpired(token) ;
        return (b);
    }

    // Check if the JWT token has expired
    private boolean isTokenExpired(String token) {
        assert extractExpiration(token) != null;
        return extractExpiration(token).before(new Date());
    }

    // Extract the token expiration time from the JWT token
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
