package com.example.market.mapper;

import com.example.market.dto.ProductDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
@Repository
public interface ProductMapper {

    Long getProductCount();

    void addProduct(String itemNm, int itemPrc, int itemAmt, LocalDateTime createDateTime);

    void updateProduct(int itemSeq, String itemNm, int itemPrc, int itemAmt, LocalDateTime updateDateTime);

    void deleteProduct(int itemSeq);

    List<ProductDto> getProductList(int start, int limit, String searchProductNm);

}
