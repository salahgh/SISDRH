package com.example.grh_n.security.user;

import com.example.grh_n.BugTracker.entities.Comment;
import com.example.grh_n.dbdsn.entities.PersonnelNote;
import com.example.grh_n.rh.entities.DEntitites.Personnel.DPersonnel;
import com.example.grh_n.security.user.demandeInscription.DemandeInscriptionUser;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.Confidentialite;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.folder.Folder;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
@Table(name = "A_USER")
@ToString
public class User implements UserDetails {

    @Id
    private String id;

    private String password;

    private String locked;

    @OneToOne(fetch = FetchType.LAZY)
    @NotNull
    @JoinColumn(name = "demandeInscription_id")
    private DemandeInscriptionUser demandeInscription;

    @OneToMany(mappedBy = "user")
    List<PersonnelNote> personnelNotes ;

//    @ManyToOne(fetch = FetchType.EAGER)
    @ManyToOne
    @JoinColumn(name = "habilitation")
    private Habilitation habilitation;

    @OneToMany(mappedBy = "user")
    private List<OcrResultUserGrant> ocrResultUserGrants;

    @OneToMany(mappedBy = "createdBy")
    private List<Comment> comments;

    @ManyToMany
//    @ManyToMany
    @JoinTable(
            name = "A_user_role",
            joinColumns = @JoinColumn(name = "matricule"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    @ToString.Exclude
    private Set<Role> roles;

    @ManyToMany
//    @ManyToMany
    @JoinTable(
            name = "A_user_privilege",
            joinColumns = @JoinColumn(name = "matricule"),
            inverseJoinColumns = @JoinColumn(name = "privilege_id"))
    @ToString.Exclude
    private Set<Privilege> privileges;

//    @ManyToMany(fetch = FetchType.EAGER)
    @ManyToMany
    @JoinTable(
            name = "A_user_privilege_restriction",
            joinColumns = @JoinColumn(name = "matricule"),
            inverseJoinColumns = @JoinColumn(name = "privilege_id"))
    @ToString.Exclude
    private Set<Privilege> privileges_restriction;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "personnel_id")
    @ToString.Exclude
    @NotNull
    private DPersonnel personnel;

    @ManyToMany( fetch = FetchType.LAZY)
    @JoinTable(
            name = "USER_GRANTED_PDF_FOLDER",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "FOLDER_ID"))
    @ToString.Exclude
    private List<Folder> foldersGranted;

    @OneToMany(mappedBy = "owner")
    private List<Folder> folders;

    @Override
    @Transactional
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        Set<Role> visitedRoles = new HashSet<>();
        Stack<Role> stack = new Stack<>();
        for (Role role : this.getRoles()) {
            stack.push(role);
        }

        while (!stack.empty()) {
            Role currentRole = stack.pop();
            if (visitedRoles.contains(currentRole)) {
                continue;
            }
            visitedRoles.add(currentRole);
            authorities.add(new SimpleGrantedAuthority("ROLE_" + currentRole.getName()));
            for (Privilege privilege : currentRole.getPrivileges()) {
                if (!privileges_restriction.contains(privilege)) {
                    authorities.add(new SimpleGrantedAuthority(privilege.getName()));
                }
            }
//            Set<Role> currentAncestors = new HashSet<>(ancestors.get(currentRole));
//            currentAncestors.add(currentRole);
//            for (Role compositeRole : currentRole.getCompositeRoles()) {
//                if (visitedRoles.contains(compositeRole)) {
//                    if (currentAncestors.contains(compositeRole)) {
//                        throw new IllegalStateException("Cycle detected in composite roles hierarchy");
//                    }
//                    continue;
//                }
//                Set<Role> compositeAncestors = new HashSet<>(currentAncestors);
//                compositeAncestors.add(compositeRole);
//                stack.push(compositeRole);
//                ancestors.put(compositeRole, compositeAncestors);
//            }
        }
        for (Privilege privilege : privileges) {
            if (!privileges_restriction.contains(privilege)) {
                authorities.add(new SimpleGrantedAuthority(privilege.getName()));
            }
        }

        for (Confidentialite confidentialite : habilitation.getConfidentialites()) {
            authorities.add(new SimpleGrantedAuthority(confidentialite.getLibConfidentialiteFr()));
        }

        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
//        return Objects.equals(locked, "N");
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
//        return Objects.equals(locked, "N");
        return true;
    }

    @Override
    public boolean isEnabled() {
//        return Objects.equals(locked, "N");
        return true;
    }
}
