import { workerData, parentPort } from 'worker_threads';
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const resultForParent = nthFibonacci(workerData);
    parentPort.postMessage(resultForParent);
};

sendResult();