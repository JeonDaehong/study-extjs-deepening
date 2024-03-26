package com.example.market.dto;

import jakarta.servlet.annotation.HttpConstraint;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDto {

    private Long memberSeq;
    private String memberId;
    private String memberName;
    private String memberDftAddr;
    private String memberDtlAddr;
    private String memberZipCode;
    private LocalDateTime memberRegDate;
    private String memberPwd;
}
