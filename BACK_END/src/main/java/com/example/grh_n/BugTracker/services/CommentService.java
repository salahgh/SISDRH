package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.repos.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    // Other dependencies as needed

    // Service methods
}
