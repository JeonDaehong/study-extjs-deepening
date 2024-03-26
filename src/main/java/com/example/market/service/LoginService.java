package com.example.market.service;

import com.example.market.dto.AdminDataDto;
import com.example.market.mapper.LoginMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final LoginMapper loginMapper;

    @Transactional(readOnly = true)
    public AdminDataDto getLoginInfo(String adminId, String adminPwd) {
        return loginMapper.getLoginInfo(adminId, adminPwd);
    }

    // 원래는 ID도 확인하고, Admin 계정이 여러개일 경우도 생각하고 개발해야함.
    // 그러나, 지금은 ExtJS 화면 공부이므로, 보안적인 부분은 제외하고 빠르게 서버 개발을 진행하였음.
    @Transactional
    public void updatePassword(String pwd) {
        loginMapper.updatePassword(pwd);
    }

}
