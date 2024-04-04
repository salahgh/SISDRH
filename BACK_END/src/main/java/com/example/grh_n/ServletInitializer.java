package com.example.grh_n;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import javax.imageio.ImageIO;
import java.util.Arrays;

public class ServletInitializer extends SpringBootServletInitializer {

   private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

   @Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
      logger.info("Initializing servlet");
      ImageIO.scanForPlugins();
      logger.info(Arrays.toString(ImageIO.getReaderFormatNames()));

      return application.sources(GrhNApplication.class);
   }

}
