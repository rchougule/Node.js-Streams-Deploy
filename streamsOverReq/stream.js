const express = require('express');
const fs = require('fs');
const oppressor = require('oppressor');
const { Duplex } = require('stream');

const app = express();


// sends the file in chunks
app.get('/getFile', (req, res) => {
    let file = fs.createReadStream(__dirname + '/bigFile.txt');
    let startTime = new Date();
    let endTime;

    /**
     * creating events for 'data' and 'end' on the readable stream
     * can use pipe instead
     */

    // file.on('data', (chunk) => {
    //     //console.log(chunk.toString());
    //     res.write(chunk);
    // })

    // file.on('end', () => {
    //     endTime = new Date();
    //     console.log(endTime - startTime);
    // })

    /**
     * instead, we can use pipe which handles the throttling at the receiver's end as well. pushes the data into the write stream depending on the receiver's capacity
     * handles error as well
     */

    file.pipe(res);
})

// sends at once. requester can't read the content unless the whole file is downloaded....
app.get('/getAll', (req, res) => {
    fs.readFile(__dirname + '/bigFile.txt', (err, data) => {
        if(err)
        {
            res.send('error reading file');
        } else {
            res.send(data);
        }
    })
})

app.get('/getCompressed', (req, res) => {
    let file = fs.createReadStream(__dirname + '/bigFile.txt');
    file.pipe(oppressor(req)).pipe(res);
})

app.listen(8080, '0.0.0.0', () => {
    console.log('server running');
});
