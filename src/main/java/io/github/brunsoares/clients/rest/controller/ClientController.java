package io.github.brunsoares.clients.rest.controller;

import io.github.brunsoares.clients.models.entities.Client;
import io.github.brunsoares.clients.models.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientController(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client saveClient( @RequestBody Client client){
        return clientRepository.save(client);
    }

    @GetMapping("{id}")
    public Client findClientForId( @PathVariable Integer id){
        return clientRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient( @PathVariable Integer id){
        clientRepository.findById(id)
                .map( client -> {
                    clientRepository.delete(client);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PatchMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateClient( @PathVariable Integer id, @RequestBody Client clientUpdated){
        clientRepository.findById(id)
                        .map( clientOld -> {
                            clientUpdated.setId(clientOld.getId());
                            return clientRepository.save(clientUpdated);
                        })
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

}
