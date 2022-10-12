package io.github.brunsoares.clients.rest.controller;

import io.github.brunsoares.clients.exceptions.RegisterUserException;
import io.github.brunsoares.clients.models.entities.RegisterUser;
import io.github.brunsoares.clients.models.repositories.RegisterUserRepository;
import io.github.brunsoares.clients.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class RegisterUserController {

    private final UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveUser(@RequestBody @Valid RegisterUser user){
        try {
            service.save(user);
        } catch (RegisterUserException userException){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, userException.getMessage());
        }
    }
}
