package com.example.grh_n.reports;

public class ReportNotFoundException extends RuntimeException{
    public ReportNotFoundException(String message) {
        super(message);
    }
}
