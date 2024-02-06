import { createGzip } from 'zlib';
import path from 'path';
import fs from 'fs';
const compress = async () => {
    const stream = fs.createReadStream(path.join(path.resolve(), 'src', 'zip', 'files', 'fileToCompress.txt'));
    stream.pipe(createGzip()).pipe(fs.createWriteStream(path.join(path.resolve(), 'src', 'zip', 'files', 'archive.gz')));

};

await compress();