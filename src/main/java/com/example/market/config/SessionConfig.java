package com.example.market.config;

import com.example.market.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SessionConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // addPathPatterns URL 로 접근 할 경우에만 LoginInterceptor 를 들리게 됨.
        registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/api/**");
    }
}
