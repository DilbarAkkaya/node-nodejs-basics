import fs from "fs";
import path from "path";
const write = async () => {
    const stream = fs.createWriteStream(path.join(path.resolve(), 'src', 'streams', 'files', 'fileToWrite.txt'), {flags: 'a'});
    process.stdin.pipe(stream);
};

await write();