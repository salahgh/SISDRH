package com.example.grh_n.BugTracker.services;

import com.example.grh_n.BugTracker.entities.Project;
import com.example.grh_n.BugTracker.repos.ProjectRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@GraphQLApi
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @GraphQLMutation
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    @GraphQLQuery
    public List<Project> getAllProjects() {
        return (List<Project>) projectRepository.findAll();
    }

    @GraphQLQuery
    public Page<Project> getAllProjectsPaged(PageRequest pageRequest) {
        return projectRepository.findAll(pageRequest);
    }

    @GraphQLQuery
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    @GraphQLMutation
    public Project updateProject(Long id, Project updatedProject) {
        if (projectRepository.existsById(id)) {
            updatedProject.setId(id);
            return projectRepository.save(updatedProject);
        }
        return null; // Handle appropriate error response
    }

    @GraphQLMutation
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

}
