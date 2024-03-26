package com.example.market.controller;

import com.example.market.dto.MemberDto;
import com.example.market.dto.OrderDto;
import com.example.market.dto.ProductDto;
import com.example.market.service.ApiService;
import com.example.market.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.websocket.OnClose;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Delete;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ApiController {

    private final ApiService apiService;
    private final LoginService loginService;

    @PostMapping("/sessionCheck")
    public Map<String, Object> sessionCheck(HttpServletRequest request) {
        Map<String, Object> result = new HashMap<>();
        result.put("code", 200);
        return result;
    }

    @PostMapping(value="/add/product")
    public Map<String, Object> addProduct(@RequestParam(value = "itemNm", required = false) String itemNm,
                                          @RequestParam(value = "itemPrc", required = false) int itemPrc,
                                          @RequestParam(value = "itemAmt", required = false) int itemAmt,
                                          HttpServletRequest request) throws Exception {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.addProduct(itemNm, itemPrc, itemAmt, LocalDateTime.now());
            result.put("code", 200);
        } catch (Exception e) {
            result.put("code", 999);
            result.put("msg", "상품등록 실패");
            return result;
        }
        return result;
    }

    @PostMapping(value="/update/product")
    public Map<String, Object> updateProduct(@RequestParam(value = "itemSeq", required = false) int itemSeq,
                                          @RequestParam(value = "itemNm", required = false) String itemNm,
                                          @RequestParam(value = "itemPrc", required = false) int itemPrc,
                                          @RequestParam(value = "itemAmt", required = false) int itemAmt,
                                          HttpServletRequest request) throws Exception {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.updateProduct(itemSeq, itemNm, itemPrc, itemAmt, LocalDateTime.now());
            result.put("code", 200);
        } catch (Exception e) {
            result.put("code", 999);
            result.put("msg", "상품수정 실패");
            return result;
        }
        return result;
    }

    @PostMapping(value="/list/product")
    public Map<String,Object> listProduct(@RequestParam(value = "start", required = false) int start,
                                          @RequestParam(value = "limit", required = false) int limit,
                                          @RequestParam(value = "searchProductNm", defaultValue = "") String searchProductNm,
                                          HttpServletRequest request){
        Map<String, Object> result = new HashMap<String,Object>();
        List<ProductDto> data = new ArrayList<>();

        Long totalCount = 0L;
        totalCount = apiService.getProductCount();

        if(totalCount > 0) {
            data = apiService.getProductList(start, limit, searchProductNm);
        }
        result.put("code", 200);
        result.put("totalCount", totalCount);
        result.put("data", data);

        return result;
    }

    @DeleteMapping(value="/remove/product")
    public Map<String, Object> deleteProduct(@RequestParam(value = "itemSeq", required = false) int itemSeq,
                                             HttpServletRequest request) throws Exception {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.deleteProduct(itemSeq);
            result.put("code", 200);
        } catch (Exception e) {
            result.put("code", 999);
            result.put("msg", "상품삭제 실패");
            return result;
        }
        return result;
    }


    @PostMapping(value="/list/member")
    public Map<String,Object> listMember(@RequestParam(value = "start", required = false) int start,
                                          @RequestParam(value = "limit", required = false) int limit,
                                          @RequestParam(value = "searchMemberId", defaultValue = "") String searchMemberId,
                                          HttpServletRequest request){
        Map<String, Object> result = new HashMap<String,Object>();
        List<MemberDto> data = new ArrayList<>();

        Long totalCount = 0L;
        totalCount = apiService.getMemberCount();

        if(totalCount > 0) {
            data = apiService.getMemberList(start, limit, searchMemberId);
        }
        result.put("code", 200);
        result.put("totalCount", totalCount);
        result.put("data", data);
        return result;
    }

    @PostMapping(value="/list/order")
    public Map<String,Object> listOrder(@RequestParam(value = "start", required = false) int start,
                                        @RequestParam(value = "limit", required = false) int limit,
                                        @RequestParam(value = "searchValue", defaultValue = "") String searchMemberNm,
                                        HttpServletRequest request){
        Map<String, Object> result = new HashMap<String,Object>();
        List<OrderDto> data = new ArrayList<>();

        Long totalCount = 0L;
        totalCount = apiService.getOrderCount();

        if(totalCount > 0) {
            data = apiService.getOrderList(start, limit, searchMemberNm);
        }
        result.put("code", 200);
        result.put("totalCount", totalCount);
        result.put("data", data);
        return result;
    }

    // 원래 서버에서 한 번 더 벨리데이션 체크를 진행해주어야 함. 그러나 ExtJS 화면 교육이므로 그 부분은 생략하였음.
    @PostMapping(value="/changePwd")
    public Map<String,Object> listOrder(@RequestParam(value = "password", required = false) String password,
                                        HttpServletRequest request){
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            loginService.updatePassword(password);
            result.put("code", 200);
            result.put("msg", "비밀번호가 성공적으로 변경되었습니다.");
        } catch (Exception e) {
            result.put("code", 999);
            result.put("msg", "서버에 에러가 발생하였습니다. 관리자에게 문의하세요.");
        }
        return result;
    }
    
}
