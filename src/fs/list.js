import fs from 'fs/promises';
import path from 'path';
const list = async () => {
    try {
        const files = await fs.readdir(path.join(path.resolve(), 'src', 'fs', 'files'), { withFileTypes: true });
        if (files.length == 0) { throw new Error('FS operation failed') }
        else {
            console.log(files)
        }
    }
    catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();