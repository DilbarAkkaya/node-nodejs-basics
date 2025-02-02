import fs from 'fs/promises';
import path from 'path';
const remove = async () => {
    try {
        await fs.unlink(path.join(path.resolve(), 'src', 'fs', 'files', 'fileToRemove.txt'));
    }
    catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();