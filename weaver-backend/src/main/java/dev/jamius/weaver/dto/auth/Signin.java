package dev.jamius.weaver.dto.auth;

import jakarta.validation.constraints.NotBlank;

public record Signin(
        @NotBlank(message = "Username cannot be blank")
        String username,

        @NotBlank(message = "Password cannot be blank")
        String password
) {
}
