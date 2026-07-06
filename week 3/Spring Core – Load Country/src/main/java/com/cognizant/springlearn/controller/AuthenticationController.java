package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.security.JwtUtil; // Adjust based on your actual JwtUtil package

@RestController
public class AuthenticationController {

    // Assuming you have a JwtUtil class or similar utility to handle token generation
    @Autowired
    private JwtUtil jwtUtil; 

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        
        // 1. Check if the Authorization header is present and is Basic auth
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
        }

        try {
            // 2. Decode the Base64 credentials
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            
            // credentials is in the format "username:password"
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            // 3. Simple credential validation (Adjust this to use your UserDetailsService if needed)
            if ("user".equals(username) && "pwd".equals(password)) {
                
                // 4. Generate token using your existing JwtUtil
                String token = jwtUtil.generateToken(username); 
                
                // Return the response in the requested format: {"token": "your_jwt_here"}
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error parsing authentication token");
        }
    }
}