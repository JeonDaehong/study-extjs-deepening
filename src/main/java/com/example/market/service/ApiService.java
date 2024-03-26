package com.example.market.service;

import com.example.market.dto.MemberDto;
import com.example.market.dto.OrderDto;
import com.example.market.dto.ProductDto;
import com.example.market.mapper.MemberMapper;
import com.example.market.mapper.OrderMapper;
import com.example.market.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApiService {

    private final ProductMapper productMapper;
    private final MemberMapper memberMapper;
    private final OrderMapper orderMapper;

    @Transactional(readOnly = true)
    public Long getProductCount()  {
        return productMapper.getProductCount();
    }

    @Transactional
    public void addProduct(String itemNm, int itemPrc, int itemAmt, LocalDateTime updateDateTime) {
        productMapper.addProduct(itemNm, itemPrc, itemAmt, updateDateTime);
    }
    @Transactional
    public void updateProduct(int itemSeq, String itemNm, int itemPrc, int itemAmt, LocalDateTime createDateTime) {
        productMapper.updateProduct(itemSeq, itemNm, itemPrc, itemAmt, createDateTime);
    }
    @Transactional
    public void deleteProduct(int itemSeq) {
        productMapper.deleteProduct(itemSeq);
    }
    @Transactional(readOnly = true)
    public List<ProductDto> getProductList(int start, int limit, String searchProductNm) {
        return productMapper.getProductList(start, limit, searchProductNm);
    }

    @Transactional(readOnly = true)
    public Long getMemberCount()  {
        return memberMapper.getMemberCount();
    }

    @Transactional(readOnly = true)
    public List<MemberDto> getMemberList(int start, int limit, String searchMemberId) {
        return memberMapper.getMemberList(start, limit, searchMemberId);
    }

    @Transactional(readOnly = true)
    public Long getOrderCount()  {
        return orderMapper.getOrderCount();
    }

    @Transactional(readOnly = true)
    public List<OrderDto> getOrderList(int start, int limit, String searchMemberNm) {
        return orderMapper.getOrderList(start, limit, searchMemberNm);
    }
}
