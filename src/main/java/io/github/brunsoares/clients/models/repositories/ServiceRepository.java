package io.github.brunsoares.clients.models.repositories;

import io.github.brunsoares.clients.models.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {

}
