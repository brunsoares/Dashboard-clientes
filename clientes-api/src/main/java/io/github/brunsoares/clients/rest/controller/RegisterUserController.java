package io.github.brunsoares.clients.rest.controller;

import io.github.brunsoares.clients.models.entities.RegisterUser;
import io.github.brunsoares.clients.models.repositories.RegisterUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class RegisterUserController {

    private final RegisterUserRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveUser(@RequestBody @Valid RegisterUser user){
        repository.save(user);
    }
}
