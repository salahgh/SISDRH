package com.example.grh_n.rh.servieces;

import org.opencv.core.*;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import org.opencv.objdetect.CascadeClassifier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class FaceDetectionService {

    private final CascadeClassifier faceCascade;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    public FaceDetectionService() {
        // Load the pre-trained face cascade classifier XML file
        faceCascade = new CascadeClassifier();
        logger.info(System.getenv("OPENCV_TRAINED_DATA"));
        if (!faceCascade.load(System.getenv("OPENCV_TRAINED_DATA"))) {
            throw new RuntimeException("Failed to load face cascade classifier.");
        }else{
            logger.info("traned data loaded....");
        }
    }

    public List<Rect> detectFaces(byte[] imageData) throws IOException {
        // Convert the byte array to an OpenCV Mat
        Mat mat = byteArrayToMat(imageData);

        // Convert the image to grayscale for face detection
        Mat grayMat = new Mat();

        try {
            Imgproc.cvtColor(mat, grayMat, Imgproc.COLOR_BGR2GRAY);
        }catch (Exception e){
            throw new IOException(e.getMessage());
        }


        // Detect faces in the image
        MatOfRect faceDetections = new MatOfRect();
        faceCascade.detectMultiScale(grayMat, faceDetections, 1.1, 3, 0, new Size(30, 30), new Size());

        // Convert the MatOfRect to a List<Rect>
        List<Rect> faces = new ArrayList<>(faceDetections.toList());

        // Release Mats to free up native memory
        mat.release();
        grayMat.release();

        return faces;
    }

    private Mat byteArrayToMat(byte[] imageData) throws IOException {
        try (InputStream in = new ByteArrayInputStream(imageData)) {
            return Imgcodecs.imdecode(new MatOfByte(imageData), Imgcodecs.IMREAD_COLOR);
        }
    }

    public static void drawRectangles(BufferedImage image, List<Rect> faces) {
        Graphics2D g2d = (Graphics2D) image.getGraphics();
        g2d.setColor(java.awt.Color.RED);
        for (Rect face : faces) {
            g2d.drawRect(face.x, face.y, face.width, face.height);
        }
        g2d.dispose();
    }
}
