package dev.jamius.weaver.dto.team;

import dev.jamius.weaver.entity.Team;

public record TeamResponse(
        Long id,
        String name,
        String website,
        String description,
        String pictureLink
) {
    public static TeamResponse fromEntity(Team team) {
        return new TeamResponse(
                team.getId(),
                team.getName(),
                team.getWebsite(),
                team.getDescription(),
                team.getPictureLink()
        );
    }
}
