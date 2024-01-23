import fs from 'fs/promises';
import path from 'path';
const copy = async () => {
    try {
        await fs.mkdir('./src/fs/files-copy', { recursive: true },)
        const files = await fs.readdir(path.join('./src/fs/files'), { withFileTypes: true });
        await Promise.all(files.map(async (file) => {
            if (file.isFile()) {
                await fs.copyFile(path.join('./src/fs/files', file['name']), path.join('./src/fs/files-copy', file['name']), fs.constants.COPYFILE_EXCL)
            }
        }))
    }
    catch (err) {
        if (err) throw new Error('FS operation failed');
    }
}
copy();