package com.example.grh_n.security.user;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.stereotype.Service;


@Service
@GraphQLApi
public class AdminsitrationService {
    private final UserService userService;
    private final RoleRepository roleRepository;
    private final PrivilegeRepository privilegeRepository;

    public AdminsitrationService(
            UserService userService,
            RoleRepository roleRepository,
            PrivilegeRepository privilegeRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
        this.privilegeRepository = privilegeRepository;
    }

    @GraphQLQuery
    public EnumsWrapper enumsWrapperForCodeGeneration(EnumsWrapper enumsWrapper) {
        return new EnumsWrapper();
    }
}
