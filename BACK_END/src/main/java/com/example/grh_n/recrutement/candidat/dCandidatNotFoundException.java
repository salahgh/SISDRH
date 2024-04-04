package com.example.grh_n.recrutement.candidat;

public class dCandidatNotFoundException extends RuntimeException{

    public dCandidatNotFoundException(String notFound) {
        super(notFound);
    }
}
