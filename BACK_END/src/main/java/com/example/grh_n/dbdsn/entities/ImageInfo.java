package com.example.grh_n.dbdsn.entities;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ImageInfo {

    private Double translateX;
    private Double translateY;
    private Double width ;
    private Double height ;
    private Double rotation ;

}
