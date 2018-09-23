const express = require('express');
const fs = require('fs');

const app = express();

app.get('/getFileAtOnce', (req, res) => {
    fs.readFile('./big_file', (err, data) => {
        if(err) {
            throw err;
        } else {
            console.log('File Read Complete. Sending the Response...');
            res.send(data);
        }
    })
})

app.get('/getFileInChucks', (req, res) => {
    const source = fs.createReadStream('./big_file');
    source.pipe(res);
})

app.listen(8081, '0.0.0.0', () => {
    console.log('Server running on 8081');
})