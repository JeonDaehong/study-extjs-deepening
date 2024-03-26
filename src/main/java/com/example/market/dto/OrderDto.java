package com.example.market.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class OrderDto {
    private Long orderId;
    private String memberNm;
    private LocalDateTime orderRegDt;
    private String orderStatus;
    private String orderName;
    private Integer orderCount;
    private Integer orderTotalPrc;
    private String deliveryNm;
    private String deliveryAddr;
    private String deliveryZipcode;
    private String deliveryStatusNm;
}
