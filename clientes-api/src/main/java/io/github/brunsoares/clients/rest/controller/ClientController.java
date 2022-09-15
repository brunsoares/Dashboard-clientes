package io.github.brunsoares.clients.rest.controller;

import io.github.brunsoares.clients.models.entities.Client;
import io.github.brunsoares.clients.models.presenters.ClientPresenter;
import io.github.brunsoares.clients.models.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin("http://localhost:4200")
public class ClientController {

    private final ClientRepository clientRepository;
    
    private static final String ERROR_MESSAGE = "Cliente não encontrado!";

    @Autowired
    public ClientController(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client saveClient( @RequestBody @Valid ClientPresenter clientPresenter){
        Client client = new Client(clientPresenter.getName(), clientPresenter.getCpf());
        return clientRepository.save(client);
    }

    @GetMapping("{id}")
    public Client findClientForId( @PathVariable Integer id){
        return clientRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, ERROR_MESSAGE));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient( @PathVariable Integer id){
        clientRepository.findById(id)
                .map( client -> {
                    clientRepository.delete(client);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, ERROR_MESSAGE));
    }

    @PatchMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateClient( @PathVariable Integer id, @RequestBody @Valid ClientPresenter clientPresenter){
        Client clientUpdated = new Client(clientPresenter.getName(), clientPresenter.getCpf());
        clientRepository.findById(id)
                        .map( clientOld -> {
                            clientUpdated.setId(clientOld.getId());
                            return clientRepository.save(clientUpdated);
                        })
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, ERROR_MESSAGE));
    }

}
