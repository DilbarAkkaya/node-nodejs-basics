import fs from 'fs';
import path from 'path';
const create = async () => {
    fs.writeFile(path.join(path.resolve(), 'src', 'fs', 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed');
    })
}
await create();