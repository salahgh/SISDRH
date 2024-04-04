package com.example.grh_n.textReglementaire.tess4j.OCRJOB.SystemInfo;

import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.ThreadMXBean;
import java.nio.file.FileStore;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@GraphQLApi
@Service
public class SystemInofoService {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    // Endpoint to retrieve system memory information
    @GraphQLQuery
    public MemoryUsage getMemoryUsage_() {
        MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();
        return memoryMXBean.getHeapMemoryUsage();
    }

    // Endpoint to retrieve CPU usage information
    @GraphQLQuery
    public List<String> getCpuUsage_() {

        List<String> result = new ArrayList<>();
        OperatingSystemMXBean operatingSystemMXBean = ManagementFactory.getOperatingSystemMXBean();
        result.add("cpu name: " + operatingSystemMXBean.getName());
        result.add("getArch: " + operatingSystemMXBean.getArch());
        result.add("getVersion: " + operatingSystemMXBean.getVersion());
        result.add("getAvailableProcessors: " + operatingSystemMXBean.getAvailableProcessors());
        result.add("getSystemLoadAverage :" + operatingSystemMXBean.getSystemLoadAverage());
        return result;
    }

    // Endpoint to retrieve information about the number of threads in the system
    @GraphQLQuery
    public List<String> getThreadInfo() {
        ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();
        int threadCount = threadMXBean.getThreadCount();
        int daemonThreadCount = threadMXBean.getDaemonThreadCount();
        int peakThreadCount = threadMXBean.getPeakThreadCount();
        long totalStartedThreadCount = threadMXBean.getTotalStartedThreadCount();

        List<String> result = new ArrayList<>();
        result.add("Thread count: " + threadCount);
        result.add("Daemon thread count: " + daemonThreadCount);
        result.add("Peak thread count: " + peakThreadCount);
        result.add("Total started thread count: " + totalStartedThreadCount);
        return result;
    }

    // Endpoint to retrieve information about the system's disk usage
    // Endpoint to retrieve information about the system's disk usage

    @GraphQLQuery
    public List<List<String>> getDiskUsage() {
        List<List<String>> result = new ArrayList<>();
        Iterable<Path> roots = FileSystems.getDefault().getRootDirectories();
        for (Path root : roots) {
            try {
                List<String> driveResults = new ArrayList<>();
                FileStore store = Files.getFileStore(root);
                long totalSpace = store.getTotalSpace();
                long usableSpace = store.getUsableSpace();
                long usedSpace = totalSpace - usableSpace;
                driveResults.add("Drive: " + root);
                driveResults.add("Total space: " + totalSpace + " bytes");
                driveResults.add("Usable space: " + usableSpace + " bytes");
                driveResults.add("Used space: " + usedSpace + " bytes");
                double percentUsed = ((double) usedSpace / totalSpace) * 100;
                driveResults.add("Percentage used: " + String.format("%.2f", percentUsed) + "%");
                result.add(driveResults);
            } catch (IOException e) {
                logger.trace(String.valueOf(e));
            }

        }
        return result;
    }

}




