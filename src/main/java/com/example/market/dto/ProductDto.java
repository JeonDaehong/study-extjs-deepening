package com.example.market.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@ToString
public class ProductDto {
    private Integer itemSeq;
    private String itemNm;
    private Integer itemPrc;
    private Integer itemAmt;
    private LocalDateTime itemRegDt;
}
