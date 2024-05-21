package com.example.grh_n.security.user;

import com.querydsl.core.types.dsl.BooleanExpression;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.constraints.NotNull;
import org.apache.commons.collections.IteratorUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@GraphQLApi
@Service
public class UserService {

   @Autowired
   private UserRepository_ userRepository;

   @Autowired HabilitationRepository habilitationRepository ;
   private final Logger logger = LoggerFactory.getLogger(this.getClass());
   @Autowired
   private RoleRepository roleRepository;
   @Autowired
   private PrivilegeRepository privilegeRepository;


   public User getByMatricule(String matricule) {
      return userRepository.findByMatricule(matricule).orElseThrow(
              () -> new EntityNotFoundException("User not found with matricule " + matricule));
   }

   public User createUser(@NotNull User user){
      if (userRepository.existsById(user.getId())) {
         throw new EntityExistsException("User already exists with matricule " + user.getId());
      }
      return userRepository.save(user);
   }

   public User updateUser(String matricule, User user) {
      boolean userExiste = userRepository.existsById(matricule);
      if(!userExiste){
         throw new EntityNotFoundException("User does not exist with matricule " + matricule) ;
      }
      return userRepository.save(user);
   }

   public void deleteUser(String matricule) {
      boolean userExiste = userRepository.existsById(matricule);
      if(!userExiste){
         throw new EntityExistsException("User does not exist with matricule " + matricule) ;
      }
      userRepository.deleteById(matricule);
   }

   @GraphQLQuery
   public Page<User> getAllUsersPaged(Pageable pageable) {
      return userRepository.findAll(pageable);
   }

   @GraphQLQuery(name = "getUsers")
   public List<User> getUsers(){
      return (List<User>) userRepository.findAll();
   }

   @GraphQLQuery
   public Collection
           <? extends GrantedAuthority> getAuthorities(String matricule) {
      User user = this.getByMatricule(matricule);

      return user.getAuthorities();
   }

   @GraphQLQuery
   public Collection
           <? extends GrantedAuthority> getLoggedInAuthorities() {
      String username = SecurityContextHolder.getContext().getAuthentication().getName();
      User user = this.getByMatricule(username);
      return user.getAuthorities();
   }

   public boolean hasAuthoritie(String authoritie , User user){
      return user.getAuthorities().stream().anyMatch(grantedAuthority -> grantedAuthority.getAuthority().equals(authoritie));
   }

   public User getLoggedInUser() {
      String username = SecurityContextHolder.getContext().getAuthentication().getName();
      return this.getByMatricule(username);
   }

   // todo it should be changed in production severe security issue create a dto
   @GraphQLQuery
   public User getUser(String matricule) {
      return this.getByMatricule(matricule);
   }

   @GraphQLQuery
   public List<Habilitation> getHabilitations() {
      return IteratorUtils.toList(habilitationRepository.findAll().iterator());
   }

   @GraphQLMutation
   public boolean setHablitation( String userName , String habilitaitonId){
      User user = this.getByMatricule(userName) ;
      Habilitation habilitation = habilitationRepository.findById(habilitaitonId)
              .orElseThrow(() -> new EntityNotFoundException("habilitation does not exist"));
      user.setHabilitation(habilitation);
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userAddRole( String userName , String roleName){
      User user = this.getByMatricule(userName) ;
      Role role = roleRepository.findByName(roleName).orElseThrow(
              () -> new EntityNotFoundException("role does not exist role_id " + roleName)
      );
      Set<Role> roles = user.getRoles() ;
      roles.add(role) ;
      user.setRoles(roles);

      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userDeleteRole( String userName , String roleName){
      User user = this.getByMatricule(userName) ;
      Role role = roleRepository.findByName(roleName).orElseThrow(
              () -> new EntityNotFoundException("role does not exist role_id " + roleName)
      );
      user.getRoles().remove(role);
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userAddPrivilege(String userName , String privilegeName){
      User user = this.getByMatricule(userName) ;
      Privilege privilege = privilegeRepository.findByName(privilegeName).orElseThrow(
              () -> new EntityNotFoundException("privilege does not exist role_id " + privilegeName)
      );
      user.getPrivileges().add(privilege) ;
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userDeletePrivilege( String userName , String privilegeName){
      User user = this.getByMatricule(userName) ;
      Privilege privilege = privilegeRepository.findByName(privilegeName).orElseThrow(
              () -> new EntityNotFoundException("privilege does not exist role_id " + privilegeName)
      );
      user.getPrivileges().remove(privilege);
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userAddPrivilegeRestriction(String userName , String privilegeName){
      User user = this.getByMatricule(userName) ;
      Privilege privilege = privilegeRepository.findByName(privilegeName).orElseThrow(
              () -> new EntityNotFoundException("privilege does not exist role_id " + privilegeName)
      );
      user.getPrivileges_restriction().add(privilege) ;
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLMutation
   public boolean userDeletePrivilegeRestriction( String userName , String privilegeName){
      User user = this.getByMatricule(userName) ;
      Privilege privilege = privilegeRepository.findByName(privilegeName).orElseThrow(
              () -> new EntityNotFoundException("privilege does not exist role_id " + privilegeName)
      );
      user.getPrivileges_restriction().remove(privilege);
      userRepository.save(user) ;
      return true ;
   }

   @GraphQLQuery
   Page<User> getGrantedUsersOcrResult(Pageable pageable) {
      return userRepository.findByOcrResultUserGrantsIsNotEmpty(pageable) ;
   }

   @GraphQLQuery
   public Page<User> searchUsersByToken(String searchToken , Pageable pageable){
      QUser qUser = QUser.user;
      BooleanExpression booleanExpression = qUser.id.like("%" + searchToken + "%")
              .or(qUser.personnel.nom.toUpperCase().like("%" + searchToken.toUpperCase() + "%"))
              .or(qUser.personnel.noma.like("%" + searchToken.toUpperCase() + "%"))
              .or(qUser.personnel.pnom.toUpperCase().like("%" + searchToken.toUpperCase() + "%"))
              .or(qUser.personnel.pnoma.like("%" + searchToken.toUpperCase() + "%"));
      return userRepository.findAll(booleanExpression , pageable);
   }

   public List<User> findByIds(List<String> ids){
      return (List<User>) userRepository.findAllById(ids);
   }

}

