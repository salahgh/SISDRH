package com.example.grh_n.security.acl;

import org.springframework.security.acls.model.*;

import java.util.List;
import java.util.Map;

public class MyAclService implements AclService {

    @Override
    public List<ObjectIdentity> findChildren(ObjectIdentity parentIdentity) {
        return null;
    }

    @Override
    public Acl readAclById(ObjectIdentity object) throws NotFoundException {
        return null;
    }

    @Override
    public Acl readAclById(ObjectIdentity object, List<Sid> sids) throws NotFoundException {
        return null;
    }

    @Override
    public Map<ObjectIdentity, Acl> readAclsById(List<ObjectIdentity> objects) throws NotFoundException {
        return null;
    }

    @Override
    public Map<ObjectIdentity, Acl> readAclsById(List<ObjectIdentity> objects, List<Sid> sids) throws NotFoundException {
        return null;
    }
}
