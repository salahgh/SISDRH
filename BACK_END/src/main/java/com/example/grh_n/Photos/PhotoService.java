package com.example.grh_n.Photos;

import com.example.grh_n.dbdsn.entities.ImageInfo;
import com.example.grh_n.pam.entities.PhotoWithFaces;
import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.rh.entities.DEntitites.Personnel.PersonnelsService;
import com.example.grh_n.rh.servieces.FaceDetectionService;
import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityNotFoundException;
import org.apache.commons.codec.binary.Base64;
import org.imgscalr.Scalr;
import org.opencv.core.Rect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@GraphQLApi
@Service
public class PhotoService {

    private final PhotoRepository photoRepository;
    private final PersonnelsService personnelsService;
    private final ThumbnailRepository thumbnailRepository;
    private final FaceDetectionService faceDetectionService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public PhotoService(
            PersonnelsService personnelsService,
            PhotoRepository photoRepository,
            ThumbnailRepository thumbnailRepository, FaceDetectionService faceDetectionService) {
        this.personnelsService = personnelsService;
        this.photoRepository = photoRepository;
        this.thumbnailRepository = thumbnailRepository;
        this.faceDetectionService = faceDetectionService;
    }

    @GraphQLQuery
    public Photo getPhotoById(Long id) {
        return photoRepository.findById(id)
                .orElseThrow(() -> new PhotoNotFoundException("Photo not found " + id));
    }

    @GraphQLMutation
    public PhotoWithFaces createPhoto(Photo photoInput) throws IOException {

        DPersonnel personnel = personnelsService.getPersonnelByMatricule(photoInput.getPersonnel().getMatricule());
        if (photoRepository.existsByPersonnel(personnel)) {
            photoRepository.delete(personnel.getPhotos().get(0));
        }
        ByteArrayInputStream bais = new ByteArrayInputStream(photoInput.getPhotoData());
        BufferedImage image = ImageIO.read(bais);
        photoInput.setTranslateX(photoInput.getTranslateX() * image.getWidth());
        photoInput.setTranslateY(photoInput.getTranslateY() * image.getHeight());
        photoInput.setHeight(photoInput.getHeight() * image.getHeight());
        photoInput.setWidth(photoInput.getWidth() * image.getWidth());
        photoInput.setPersonnel(personnel);
        photoInput.setDateTaken(LocalDateTime.now());
        Photo savedPhoto = photoRepository.save(photoInput);
        generateThumbnailsFromPhoto(savedPhoto, image);
        Rect rect = generateFacesThumbnailsFromPhoto(savedPhoto, image);
        FaceDetectionService.drawRectangles(image, List.of(rect));
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, photoInput.getFormat(), baos);
        savedPhoto.setPhotoData(baos.toByteArray());
        return PhotoWithFaces.builder()
                .photo(savedPhoto)
                .rect(rect)
                .build();
    }

//    @GraphQLMutation
//    boolean generateFacesPhoto(String matricule) {
//        DPersonnel personnel = personnelsService.getPersonnelByMatricule(matricule);
//        ByteArrayInputStream bais = new ByteArrayInputStream(personnel.getPhotos().get(0).getPhotoData());
//        BufferedImage image;
//        try {
//            image = ImageIO.read(bais);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//        Rect rect ;
//        try {
//            rect = generateFacesThumbnailsFromPhoto(personnel.getPhotos().get(0), image);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//
//        ByteArrayOutputStream baos = new ByteArrayOutputStream();
////        ImageIO.write(image, photoInput.getFormat(), baos);
//
//    }

    public static Rect findMaxAreaRect(List<Rect> rectangles) throws IllegalArgumentException {
        if (rectangles == null || rectangles.isEmpty()) {
           throw new IllegalArgumentException("not valid rectangle");
        }
        Rect maxAreaRect = rectangles.get(0);

        for (Rect rect : rectangles) {
            double maxArea = maxAreaRect.width * maxAreaRect.height;
            double currentArea = rect.width * rect.height;

            if (currentArea > maxArea) {
                maxAreaRect = rect;
            }
        }
        return maxAreaRect;
    }


    private Rect generateFacesThumbnailsFromPhoto(
            Photo savedPhoto,
            BufferedImage image
    ) throws IOException {

        List<Rect> rects = null;
        try {
            rects = faceDetectionService.detectFaces(savedPhoto.getPhotoData());
        } catch (IOException e) {
            throw new IOException(e);
        }
        Rect rect = null ;
        try {
            rect = findMaxAreaRect(rects);
        }catch (Exception e){
            throw new IOException(e);
        }

        float coefficient = 0.2F ;
        Rect newRect = getAdjustedRect(rect,coefficient);
        BufferedImage croppedImage = null ;
        if(image != null){

            try {
                croppedImage = Scalr.crop(
                        image,
                        newRect.x,
                        newRect.y,
                        newRect.width,
                        newRect.height
                );
            }catch (Exception e){

                return new Rect() ;
            }

        }else{
            ByteArrayInputStream bais = new ByteArrayInputStream(savedPhoto.getPhotoData());
            BufferedImage image_ = ImageIO.read(bais);
            try {
                croppedImage = Scalr.crop(
                        image_,
                        newRect.x,
                        newRect.y,
                        newRect.width,
                        newRect.height
                );
            }catch (Exception e){
                return new Rect();
            }
        }

        for (ThumbnailSize size : ThumbnailSize.values()) {
            if(size.getSize() <= 1000) continue;
            BufferedImage scaledImage = Scalr.resize(croppedImage, size.getSize() - 2000);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(scaledImage, savedPhoto.getFormat(), baos);
            Thumbnail thumbnail = Thumbnail.builder()
                    .photo(savedPhoto)
                    .thumbSize(size.getSize())
                    .thumbData(baos.toByteArray())
                    .build();
            thumbnailRepository.save(thumbnail);
        }
        return rect;
    }

    private Rect getAdjustedRect(Rect rect ,float coefficient) {
        return new Rect(
                (int) ((rect.x - rect.width * 1.2 * coefficient) < 0 ? 0 : rect.x - rect.width * 1.2 * coefficient),
                (int) ((rect.y - rect.height * 1.5 * coefficient) < 0 ? 0 : rect.y - rect.height * 1.5 * coefficient),
                (int) (rect.height * (1 + 2.4 * coefficient)),
                (int) (rect.height * (1 + 2.4 * coefficient))
        );
    }


    @GraphQLQuery
    public List<Photo> getPhotoByMatricule(String matricule) {
        DPersonnel personnel = personnelsService.getPersonnelByMatricule(matricule);
        List<Photo> photos = photoRepository.findByPersonnelOrderByDateTakenDesc(personnel);
        if (photos.isEmpty()) {
            throw new EntityNotFoundException("no fotos found");
        }
        return photos;
    }

    @GraphQLQuery(name = "getThumbnailByMatriculeAndSize")
    public Thumbnail getCurrentPhotoByMatriculeAndSize(String matricule, int size) {
        DPersonnel personnel = personnelsService.getPersonnelByMatricule(matricule);
        List<Photo> photos = photoRepository.findByPersonnelOrderByDateTakenDesc(personnel);
        if (photos.isEmpty()) {
//            throw new EntityNotFoundException("no photos found for user " + matricule);
            // todo throw new exception
           return null;
        }
        return thumbnailRepository.findByPhotoAndThumbSize(photos.get(0), size);
    }

    public BufferedImage rotateImage(
            BufferedImage image,
            double degrees
    ) {
        int width = image.getWidth();
        int height = image.getHeight();
        AffineTransform transform = new AffineTransform();
        transform.rotate(Math.toRadians(degrees), width / 2.0, height / 2.0);
        BufferedImage rotatedImage = new BufferedImage(width, height, image.getType());
        Graphics2D g2d = rotatedImage.createGraphics();
        g2d.setTransform(transform);
        g2d.drawImage(image, 0, 0, null);
        g2d.dispose();
        return rotatedImage;
    }

    @GraphQLMutation
    public void generateThumbnails(){
        List<Photo> photoList = photoRepository.findByThumbnailsEmpty();
        for (Photo photo : photoList) {
            try {
                generateFacesThumbnailsFromPhoto(photo , null);
            } catch (IOException e) {

            }
        }
    }

    @GraphQLQuery
    public ImageInfo photoDetails(String photoData, String format) throws IOException {
        ByteArrayInputStream bais = new ByteArrayInputStream(Base64.decodeBase64(photoData));
        BufferedImage image = ImageIO.read(bais);
        return ImageInfo.builder()
                .rotation(0.0)
                .translateX(0.0)
                .translateY(0.0)
                .width((double) image.getWidth())
                .height((double) image.getHeight())
                .build();
    }

    private void generateThumbnailsFromPhoto(Photo photo, BufferedImage image) throws IOException {

        Double rotation = photo.getRotation();
        Double photoTranslateX = photo.getTranslateX();
        Double photoTranslateY = photo.getTranslateY();
        Double width = photo.getWidth();
        Double height = photo.getHeight();

        BufferedImage rotatedImage = rotateImage(image, rotation != null ? rotation : 0);
        BufferedImage croppedImage = Scalr.crop(
                rotatedImage,
                photoTranslateX != null ? photoTranslateY.intValue() : 0,
                photo.getTranslateY().intValue(),
                photo.getWidth().intValue(),
                photo.getHeight().intValue()
        );

        for (ThumbnailSize size : ThumbnailSize.values()) {
            if(size.getSize() > 1000) continue;
            BufferedImage scaledImage = Scalr.resize(croppedImage, size.getSize());
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(scaledImage, photo.getFormat(), baos);
            Thumbnail thumbnail = Thumbnail.builder()
                    .photo(photo)
                    .thumbSize(size.getSize())
                    .thumbData(baos.toByteArray())
                    .build();
            thumbnailRepository.save(thumbnail);
        }
    }

    public List<Thumbnail> findThumbnailBySizeInAndMatriculeIn(List<Integer> sizes , List<String> matricules){
        QThumbnail qThumbnail = QThumbnail.thumbnail ;
        BooleanExpression booleanExpression = qThumbnail.thumbSize.in(sizes).and(qThumbnail.photo.personnel.matricule.in(matricules));
        return (List<Thumbnail>) thumbnailRepository.findAll(booleanExpression);
    }
}

