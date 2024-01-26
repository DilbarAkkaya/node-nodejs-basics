import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';

const performCalculations = async () => {
    const arrayOfResultsFromWorkers = [];
    const numberCPU = os.cpus().length;
    for (let i = 0; i < numberCPU; i++) {
        const worker = new Worker(path.join(path.resolve(), 'src', 'wt', 'worker.js'), { workerData: 10 + i });
        worker.on('message', (message) => {
            arrayOfResultsFromWorkers[i] = { status: 'resolved', data: message };
            if (arrayOfResultsFromWorkers.length === numberCPU) console.log(arrayOfResultsFromWorkers);
        });
        worker.on('error', (error) => {
            arrayOfResultsFromWorkers[i] = { status: 'error', data: null };
            if (arrayOfResultsFromWorkers.length === numberCPU) {
                console.log(arrayOfResultsFromWorkers);
            }
        });
    }

};


await performCalculations();