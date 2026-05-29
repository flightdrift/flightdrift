package com.flightdrift.flightdrift.dto.auth;

import java.util.UUID;

/*
 * Author: Jamius Siam
 * Since: 29/05/2026
 */
public record UserInfoResponse(
        UUID id,
        String name,
        String email,
        String username
) {
}
