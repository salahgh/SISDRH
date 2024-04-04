package com.example.grh_n;

import com.example.grh_n.dbdsn.repos.ReportPosteRealiseRepository;
import com.example.grh_n.reports.ReportNames;
import com.example.grh_n.reports.ReportsNames;
import com.example.grh_n.reports.ReportsNamesRepository;
import com.example.grh_n.security.user.*;
import jakarta.annotation.PostConstruct;
import nu.pattern.OpenCV;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.imageio.ImageIO;
import javax.imageio.spi.IIORegistry;
import javax.imageio.spi.ImageReaderSpi;
import java.util.Iterator;
import java.util.Locale;

@SpringBootApplication
@CrossOrigin
public class GrhNApplication {

    private final RoleRepository roleRepository;
    private final PrivilegeRepository privilegeRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    private final ReportsNamesRepository namesRepository;
    private final ReportPosteRealiseRepository reportPosteRealiseRepository;

    public GrhNApplication(RoleService roleService, PrivilegeService privilegeService, RoleRepository roleRepository, PrivilegeRepository privilegeRepository, ReportsNamesRepository namesRepository,
                           ReportPosteRealiseRepository reportPosteRealiseRepository) {
        this.roleRepository = roleRepository;
        this.privilegeRepository = privilegeRepository;
        this.namesRepository = namesRepository;
        this.reportPosteRealiseRepository = reportPosteRealiseRepository;
    }
    static {
        OpenCV.loadLocally();
    }
    public static void main(String[] args) {
        SpringApplication.run(GrhNApplication.class, args);
    }

    @PostConstruct
    public void scanImageIOPlugins() {
        IIORegistry registry = IIORegistry.getDefaultInstance();
        ImageIO.scanForPlugins();
        Iterator<ImageReaderSpi> readerSpis = registry.getServiceProviders(javax.imageio.spi.ImageReaderSpi.class, true);
        while (readerSpis.hasNext()) {
            javax.imageio.spi.ImageReaderSpi readerSpi = readerSpis.next();
            logger.info("Plugin: " + readerSpi.getDescription(Locale.ENGLISH));
        }

        logger.info("loading open cv");


        for (RolesEnum value : RolesEnum.values()) {
            roleRepository.save(
                    Role.builder()
                            .id(String.valueOf(value))
                            .name(String.valueOf(value))
                            .build()
            );
        }

        for (PrivilegesEnum value : PrivilegesEnum.values()) {
            privilegeRepository.save(
                    Privilege.builder()
                            .id(String.valueOf(value))
                            .name(String.valueOf(value))
                            .build()
            );
        }

        for (PrivilegesEnum value : PrivilegesEnum.values()) {
            privilegeRepository.save(
                    Privilege.builder()
                            .id(String.valueOf(value))
                            .name(String.valueOf(value))
                            .build()
            );
        }
        for (ReportNames value : ReportNames.values()) {
            if (!namesRepository.existsById(value.name())) {
                namesRepository.save(ReportsNames.builder()
                        .fileName(value.name())
                        .build());
            }
        }
    }
}
