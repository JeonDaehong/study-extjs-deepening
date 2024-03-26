package com.example.market.mapper;

import com.example.market.dto.TestDataDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TestMapper {
    Long getTestDataTotalCount();
    List<TestDataDto> getTestData();
}
