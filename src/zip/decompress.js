import zlib from 'zlib';
import path from 'path';
import fs from 'fs';
const decompress = async () => {
    const stream = fs.createReadStream(path.join(path.resolve(), 'src', 'zip', 'files', 'archive.gz'));
    stream.pipe(zlib.createGunzip()).pipe(fs.createWriteStream(path.join(path.resolve(), 'src', 'zip', 'files', 'fileToCompress.txt')));
};

await decompress();