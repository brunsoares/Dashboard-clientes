package io.github.brunsoares.clients.models.repositories;

import io.github.brunsoares.clients.models.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
