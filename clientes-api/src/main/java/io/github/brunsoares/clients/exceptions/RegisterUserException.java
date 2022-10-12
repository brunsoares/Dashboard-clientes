package io.github.brunsoares.clients.exceptions;

public class RegisterUserException extends RuntimeException{

    public RegisterUserException(String login){
        super("Usuário já cadastrado com o login: ".concat(login));
    }
}
