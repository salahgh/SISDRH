package com.example.grh_n.Photos;

import org.imgscalr.Scalr;

public enum ThumbnailSize {

    SMALL("small", Scalr.Mode.FIT_TO_WIDTH, 100),
    MEDIUM("medium", Scalr.Mode.FIT_TO_WIDTH, 200),
    LARGE("large", Scalr.Mode.FIT_TO_WIDTH, 500),
    EXTRA_LARGE("extra-large", Scalr.Mode.FIT_TO_WIDTH, 1000),
    FACE_SMALL("FACE_SMALL", Scalr.Mode.FIT_TO_WIDTH, 2100),
    FACE_MEDIUM("FACE_MEDIUM", Scalr.Mode.FIT_TO_WIDTH, 2200),
    FACE_LARGE("FACE_LARGE", Scalr.Mode.FIT_TO_WIDTH, 2500) ;

    private final String name;
    private final Scalr.Mode mode;
    private final Integer size;

    ThumbnailSize(String name, Scalr.Mode mode, int size) {
        this.name = name;
        this.mode = mode;
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public Scalr.Mode getMode() {
        return mode;
    }

    public int getSize() {
        return size;
    }
}
