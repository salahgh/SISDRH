package com.example.grh_n.reports;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReportsNamesRepository extends CrudRepository<ReportsNames, String> , PagingAndSortingRepository<ReportsNames , String> {
}