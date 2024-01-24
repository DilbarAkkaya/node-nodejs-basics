import fs from 'fs/promises';
import path from 'path';
const read = async () => {
    try {
        const content = await fs.readFile(path.join(path.resolve(), 'src', 'fs', 'files', 'fileToRead.txt'), { encoding: 'utf8' });
        console.log(content)
    }
    catch(err) {
        throw new Error('FS operation failed');
    }
};

await read();