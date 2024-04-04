package com.example.grh_n.notification;

import com.example.grh_n.security.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NotificationRepository extends PagingAndSortingRepository<Notification, Long> , CrudRepository<Notification,Long> {

    public Page<Notification> findByOwner(User owner , Pageable pageable);
}