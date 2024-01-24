import fs from 'fs/promises';
const list = async () => {
    try {
        const files = await fs.readdir('./src/fs/files', { withFileTypes: true });
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