import fs from "fs";
import path from "path";
const read = async () => {
    const stream = fs.createReadStream(path.join(path.resolve(), 'src', 'streams', 'files', 'fileToRead.txt'));
    stream.pipe(process.stdout);
};

await read();