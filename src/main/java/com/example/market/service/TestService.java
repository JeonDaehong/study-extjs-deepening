package com.example.market.service;

import com.example.market.dto.response.TestResponse;
import com.example.market.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TestService {

    private final TestMapper testMapper;

    @Transactional(readOnly = true)
    public TestResponse getTestData() {
        return TestResponse.builder()
                .total(testMapper.getTestDataTotalCount())
                .data(testMapper.getTestData())
                .build();
    }



}
