package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class IssueHistoryService {
    @Autowired
    private IssueHistoryRepository issueHistoryRepository;
    // Other dependencies as needed

    // Service methods
}
