import fs from 'fs/promises';
import path from 'path';
const rename = async () => {
    try {
        await fs.rename(path.join(path.resolve(), 'src', 'fs', 'files', 'wrongFilename.txt'), path.join(path.resolve(), 'src', 'fs', 'files', 'properFilename.md'))
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();