package com.example.grh_n.rh.entities.DEntitites.Personnel;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DPersonnelNotFoundException extends RuntimeException {
    public DPersonnelNotFoundException(String s) {
        super("no such personel " + s);
    }
}
