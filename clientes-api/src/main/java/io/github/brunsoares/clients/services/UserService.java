package io.github.brunsoares.clients.services;

import io.github.brunsoares.clients.models.entities.RegisterUser;
import io.github.brunsoares.clients.models.repositories.RegisterUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private RegisterUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        RegisterUser user = userRepository.findByUsername(username)
                                            .orElseThrow(() -> new UsernameNotFoundException("Login não cadastrado!"));
        return User.builder()
                    .username(user.getUsername())
                    .password(user.getPassword())
                    .roles("USER")
                    .build();
    }
}
