import {fork} from 'child_process';
import path from 'path';
const spawnChildProcess = async (args) => {
    const cp = fork(path.join(path.resolve(), 'src', 'cp', 'files', 'script.js'), args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });
    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);
};
spawnChildProcess( ['test1', 'test2']);
