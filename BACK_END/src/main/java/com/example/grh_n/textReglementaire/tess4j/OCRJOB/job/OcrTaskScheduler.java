package com.example.grh_n.textReglementaire.tess4j.OCRJOB.job;

import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultEntityJpa;
import com.example.grh_n.textReglementaire.tess4j.OcrResultJPA.OcrResult.OcrResultService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.TimeUnit;

@Service
@GraphQLApi
public class OcrTaskScheduler {

    private int BatchSize = 1000;
    private int desiredThreads = 1;
    private double ThreadUtilizationPercentage = 0.7;
    private static final long SCHEDULER_PERIOD_SECONDS = 15;
    private ForkJoinPool forkJoinPool;
    private boolean running;
    private final OcrJobService ocrJobService;
    private final OcrResultService ocrResultService;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    //todo manage the stop and restart of the ocrTasks
    public OcrTaskScheduler(OcrJobService ocrJobService, OcrResultService ocrResultService) {
        this.ocrJobService = ocrJobService;
        this.ocrResultService = ocrResultService;
        int availableProcessors = Runtime.getRuntime().availableProcessors();
      desiredThreads = (int) Math.ceil(availableProcessors * ThreadUtilizationPercentage);
//        desiredThreads = 2;
        forkJoinPool = new ForkJoinPool(desiredThreads);
    }

    @GraphQLMutation
    public void startScheduler() {
        running = true;
        while (running) {
            Page<OcrResultEntityJpa> ocrResultEntityJpaList = ocrResultService.getWaitingPdfs(
                    PageRequest.of(0, BatchSize, Sort.by(Sort.Order.desc("createdDate")))
            );
            if (!ocrResultEntityJpaList.isEmpty()) {
                for (OcrResultEntityJpa ocrResultEntityJpa : ocrResultEntityJpaList) {
                    ocrResultEntityJpa.setOcrDone("p");
                    ocrResultService.save(ocrResultEntityJpa);
                    OcrRecursiveTask ocrTask = new OcrRecursiveTask(List.of(ocrResultEntityJpa));
                    forkJoinPool.submit(ocrTask);
                }
            }

            try {
                TimeUnit.SECONDS.sleep(SCHEDULER_PERIOD_SECONDS);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

    @GraphQLMutation
    public void stopScheduler() {
        running = false;
        forkJoinPool.shutdownNow();
    }

    @GraphQLQuery(name = "isOcrJobRunning")
    public boolean isRunning() {
        return running;
    }

    private class OcrRecursiveTask extends RecursiveTask<String> {

        private final List<OcrResultEntityJpa> jobs;

        public OcrRecursiveTask(List<OcrResultEntityJpa> jobs) {
            this.jobs = jobs;
        }

        // todo see if there is other optimisations ...

        @Override
        protected String compute() {

            if (jobs.size() == 1) {
                ocrJobService.doOcr(jobs.get(0));
                return jobs.get(0).getOriginalFileName();
            } else {
                int mid = jobs.size() / 2;
                List<OcrResultEntityJpa> leftJobs = jobs.subList(0, mid);
                List<OcrResultEntityJpa> rightJobs = jobs.subList(mid, jobs.size());

                OcrRecursiveTask leftTask = new OcrRecursiveTask(leftJobs);
                OcrRecursiveTask rightTask = new OcrRecursiveTask(rightJobs);
//            leftTask.fork();
//            rightTask.fork();
//            String leftResult = leftTask.join();
//            String rightResult = rightTask.join();
//            forkJoinPool.submit(leftJobs) ;
                return "1";
            }
        }
    }
}
