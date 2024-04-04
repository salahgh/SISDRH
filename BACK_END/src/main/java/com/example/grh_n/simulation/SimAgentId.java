package com.example.grh_n.simulation;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
@ToString
public class SimAgentId implements Serializable {

    @Column
    private Long id;

    @Column Integer step ;

}
