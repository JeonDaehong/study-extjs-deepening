package com.example.market.controller;

import com.example.market.dto.AdminDataDto;
import com.example.market.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/loginInfo")
    public Map<String, Object> loginInfo(@RequestParam(value = "adminId", required = false) String adminId,
                                         @RequestParam(value = "adminPwd", required = false) String adminPwd,
                                         HttpServletRequest request) {
        Map<String, Object> result = new HashMap<>();
        AdminDataDto adminDataDto = loginService.getLoginInfo(adminId, adminPwd);
        if ( adminDataDto != null ) {
            result.put("data", adminDataDto);
            result.put("code", 200);
            request.getSession().setAttribute("admin", adminDataDto);
        } else {
            result.put("code", 404);
            result.put("msg", "해당 하는 ID가 없습니다.");
        }
        return result;
    }

    @RequestMapping("/fail")
    public Map<String, Object> fail() {
        Map<String, Object> result = new HashMap<>();
        result.put("code", 999);
        return result;
    }

}
