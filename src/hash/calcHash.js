import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(path.join(path.resolve(), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt'))
    return new Promise((resolve, reject) => {
        stream.on('data', (data) => {
            hash.update(data);
        });
        stream.on('end', () => {
            const valueHexFormat = hash.digest('hex');
            resolve(valueHexFormat);
            console.log(valueHexFormat);
        });
        stream.on('error', (error) => {
            reject(error)
        })
    })
};

await calculateHash();