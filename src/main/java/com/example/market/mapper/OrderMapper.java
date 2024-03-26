package com.example.market.mapper;

import com.example.market.dto.MemberDto;
import com.example.market.dto.OrderDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface OrderMapper {

    Long getOrderCount();
    List<OrderDto> getOrderList(int start, int limit, String searchMemberNm);


}
