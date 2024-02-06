import { Transform } from "stream";
const transform = async () => {
    const transformedStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('') + '\n');
        }
    })
    process.stdin.pipe(transformedStream).pipe(process.stdout);
};

await transform();