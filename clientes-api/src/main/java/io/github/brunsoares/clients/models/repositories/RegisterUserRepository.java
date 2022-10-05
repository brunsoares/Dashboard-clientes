package io.github.brunsoares.clients.models.repositories;

import io.github.brunsoares.clients.models.entities.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterUserRepository extends JpaRepository<RegisterUser, Integer> {
}
