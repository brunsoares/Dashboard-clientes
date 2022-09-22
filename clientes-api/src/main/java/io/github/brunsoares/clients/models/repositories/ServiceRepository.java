package io.github.brunsoares.clients.models.repositories;

import io.github.brunsoares.clients.models.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Integer> {

    @Query(" SELECT s FROM Service s join s.client c " +
            " where upper(c.name) like upper(:name) " +
            " and MONTH(s.dateService) = :month ")
    List<Service> findByClientNameAndMonth(@Param("name") String name, @Param("month") Integer month);
}
