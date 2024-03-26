package com.example.market.mapper;

import com.example.market.dto.MemberDto;
import com.example.market.dto.ProductDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
@Repository
public interface MemberMapper {

    Long getMemberCount();
    List<MemberDto> getMemberList(int start, int limit, String searchMemberId);


}
