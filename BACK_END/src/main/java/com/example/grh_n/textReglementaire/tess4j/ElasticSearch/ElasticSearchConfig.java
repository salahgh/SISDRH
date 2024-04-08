package com.example.grh_n.textReglementaire.tess4j.ElasticSearch;

import co.elastic.clients.transport.TransportUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchConfiguration;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

import javax.net.ssl.SSLContext;
import java.io.*;
import java.net.InetSocketAddress;

@Configuration
@EnableElasticsearchRepositories("com.example.grh_n.textReglementaire.tess4j.ElasticSearch")
public class ElasticSearchConfig extends ElasticsearchConfiguration {

   @Autowired
   Environment environment;

   private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

   private final String username       = System.getenv("REACT_APP_ELASTIC_USERNAME") ;
   private final String password       = System.getenv("REACT_APP_ELASTIC_PASSWORD") ;
   private final String host           = System.getenv("REACT_APP_ELASTIC_HOST") ;
   private final String port           = System.getenv("REACT_APP_ELASTIC_PORT") ;
   private final String certFilePath   = System.getenv("ELASTICSEARCH_CERT_PATH") ;

   public void printEnvironmentVariables() {
      logger.info("REACT_APP_ELASTIC_USERNAME: " + username);
      logger.info("REACT_APP_ELASTIC_PASSWORD: " + password);
      logger.info("REACT_APP_ELASTIC_HOST: " + host);
      logger.info("REACT_APP_ELASTIC_PORT: " + port);
      logger.info("ELASTICSEARCH_CERT_PATH: " + certFilePath);
      logger.info("DB_HOST: " + System.getenv("DB_HOST"));
      logger.info("DB_PORT: " + System.getenv("DB_PORT"));
      logger.info("DB_USERNAME: " + System.getenv("DB_USERNAME"));
      logger.info("DB_PASSWORD: " + System.getenv("DB_PASSWORD"));
      logger.info("TESSDATA: " + System.getenv("TESSDATA"));

   }

   @Override
   public ClientConfiguration clientConfiguration() {

      // Print the variable name and value

      if (certFilePath == null) {
        throw new IllegalStateException("environement variable ELASTICSEARCH_CERT_PATH not defined");
      }

      SSLContext sslContext = null;
      try {
         sslContext = TransportUtils.sslContextFromHttpCaCrt(new File(certFilePath));
         logger.info("ssl created ");
      } catch (IOException e) {
         logger.error("Failed to create SSL context from the certificate file: " + certFilePath, e.getMessage());
      }

      assert sslContext != null;
      return ClientConfiguration.builder()
              .connectedTo(new InetSocketAddress(host, Integer.parseInt(port)))
              .usingSsl(sslContext)
              .withBasicAuth(username, password)
              .withConnectTimeout(10000)
              .withSocketTimeout(10000)
              .build();
   }
}




