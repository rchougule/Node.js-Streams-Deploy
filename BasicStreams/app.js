const express = require('express');
const fs = require('fs');
const path = require('path');
const BigFileService = require('./streams.js');

const FILE_NAME = 'bigFile.txt'
const FILE = path.join(__dirname, FILE_NAME);

const app = express();

BigFileService.fileExistElseCreate(FILE)

app.get('/getFileAtOnce', (req, res) => {
    console.log('Starting File Read for One Time Send...');
    fs.readFile(FILE, (err, data) => {
        if(err) {
            throw err;
        } else {
            console.log(data);
            console.log('File Read Complete. Sending the Response...');
            res.send(data);
        }
    })
})

app.get('/getFileInChunks', (req, res) => {
    const source = fs.createReadStream(FILE);
    console.log('Sending File in Chunks...');
    console.log(source);
    source.pipe(res);
})

app.listen(8081, '0.0.0.0', () => {
    console.log('Server running on 8081\n');
})