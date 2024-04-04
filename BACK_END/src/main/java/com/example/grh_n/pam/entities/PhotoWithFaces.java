package com.example.grh_n.pam.entities;

import com.example.grh_n.Photos.Photo;
import lombok.*;
import org.opencv.core.Rect;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PhotoWithFaces {

    Photo photo ;
    Rect rect ;
}
