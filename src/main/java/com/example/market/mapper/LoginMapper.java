package com.example.market.mapper;

import com.example.market.dto.AdminDataDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface LoginMapper {

    AdminDataDto getLoginInfo(String adminId, String adminPwd);

    void updatePassword(String pwd);

}
