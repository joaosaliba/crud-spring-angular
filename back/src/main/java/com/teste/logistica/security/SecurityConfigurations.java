package com.teste.logistica.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
 
 
   private static final String[] AUTH_WHITE_LIST = {
     "/v2/api-docs",
                                    "/configuration/ui",
                                    "/swagger-resources/**",
                                    "/configuration/security",
                                    "/swagger-ui.html",
                                    "/webjars/**"
 };
 
   @Bean
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
       http.authorizeRequests(requests -> requests
               .antMatchers(AUTH_WHITE_LIST).permitAll()
               .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/**").permitAll()
               .antMatchers(HttpMethod.POST, "/api/user/register").permitAll()
               .anyRequest().authenticated()).csrf(csrf -> csrf.disable());
 
     return http.build();
   }
 
     @Bean
     public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
         return configuration.getAuthenticationManager();
     }
     
    
}
