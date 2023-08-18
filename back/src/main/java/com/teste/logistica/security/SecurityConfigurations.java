package com.teste.logistica.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations extends WebSecurityConfigurerAdapter  {
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
 
 @Override
 protected void configure(HttpSecurity http) throws Exception {
     http.cors().and().authorizeRequests()
       .antMatchers(AUTH_WHITE_LIST).permitAll()
               .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/**").permitAll()
               .antMatchers(HttpMethod.POST, "/api/user/register").permitAll()
         .anyRequest().authenticated()
         .and()
         .httpBasic().and().csrf().disable();
 }

 
 @Bean
 public CorsFilter corsFilter() {
     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
     CorsConfiguration config = new CorsConfiguration();
     config.applyPermitDefaultValues();
     source.registerCorsConfiguration("/**", config);
     return new CorsFilter(source);
 }
     
    
}
