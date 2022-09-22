package io.github.brunsoares.clients.rest.controller;

import io.github.brunsoares.clients.models.entities.Client;
import io.github.brunsoares.clients.models.entities.Service;
import io.github.brunsoares.clients.models.repositories.ClientRepository;
import io.github.brunsoares.clients.models.repositories.ServiceRepository;
import io.github.brunsoares.clients.rest.dto.ServiceDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
public class ServiceController {

    private final ClientRepository clientRepository;
    private final ServiceRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Service saveService(@RequestBody ServiceDTO serviceDTO){
        Client client = clientRepository
                            .findById(serviceDTO.getClientID())
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não cadastrado!"));

        Service registerService = new Service();
        registerService.setDescription(serviceDTO.getDescription());
        registerService.setDateService(serviceDTO.convertToLocalDate());
        registerService.setClient(client);
        registerService.setAmount(serviceDTO.convertToBigDecimal());

        return repository.save(registerService);
    }

    @GetMapping
    public List<Service> findService(@RequestParam(value = "nome", required = false, defaultValue = "") String name,
                                     @RequestParam(value = "mes", required = false) Integer month){
        return repository.findByClientNameAndMonth("%"+name+"%", month);
    }

}
