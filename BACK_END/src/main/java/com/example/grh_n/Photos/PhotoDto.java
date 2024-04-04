package com.example.grh_n.Photos;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class PhotoDto implements Serializable {

    private  String data;
    private  LocalDateTime dateTaken;
    private  Float zoom;
    private  Integer translateX;
    private  Integer translateY;
    private  String personnelMatricule;

}
