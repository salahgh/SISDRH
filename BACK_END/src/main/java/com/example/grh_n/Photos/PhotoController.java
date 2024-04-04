//package com.example.grh_n.Photos;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import java.io.IOException;
//
//@RestController
//@RequestMapping("/personnel/{matricule}/photo")
//@CrossOrigin
//public class PhotoController {
//
//    private final PhotoService photoService;
//
//    public PhotoController(PhotoService photoService) {
//        this.photoService = photoService;
//    }
//
//    @GetMapping
//    public ResponseEntity<PhotoDto> getPhoto(
//            @PathVariable String matricule,
//            @RequestParam(required = false, defaultValue = "200") int size
//    ) {
//        PhotoDto photo = photoService.getCurrentPhotoByMatriculeAndSize(matricule,size);
//        return ResponseEntity.ok(photo);
//    }
//
//    @PostMapping
//    public ResponseEntity<String> uploadPhoto(
//            @PathVariable Long matricule,
//            @RequestBody PhotoDto photoDto) {
//        try {
//            photoService.uploadPhotoDto(photoDto);
//            return ResponseEntity.ok("Photo uploaded successfully.");
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Error uploading photo: " + e.getMessage());
//        }
//    }
//
//}
//
