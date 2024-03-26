package com.example.market.controller;

import com.example.market.dto.response.TestResponse;
import com.example.market.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("/test")
    public Map<String, Object> test() {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("name", "전대홍");
        result.put("age", 29);
        return result;
    }

    @GetMapping("/getList")
    public ResponseEntity<TestResponse> getTestDataList() {
        return ResponseEntity.status(HttpStatus.OK).body(testService.getTestData());
    }

}
