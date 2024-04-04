package com.example.grh_n.dbdsn.repos;

import com.example.grh_n.dbdsn.entities.ReportPosteRealise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReportPosteRealiseRepository extends PagingAndSortingRepository<ReportPosteRealise, String> , CrudRepository<ReportPosteRealise , String> {
}