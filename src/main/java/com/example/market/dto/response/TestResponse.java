package com.example.market.dto.response;

import com.example.market.dto.TestDataDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class TestResponse {
    private Long total;
    private List<TestDataDto> data;
}
