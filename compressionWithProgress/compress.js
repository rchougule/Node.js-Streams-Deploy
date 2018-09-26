const { Transform } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// seconds argument is the file name
const file = process.argv[2];
const startTime = new Date();
// start time to note the time required for compression

// Transform stream to get the chunk and return the chunk along with printing . for process
const printProgress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
})


// get the read stream and write stream of the file to the read and compressed into
const fileIn = fs.createReadStream(path.join(__dirname, file));
const fileOut = fs.createWriteStream(path.join(__dirname, file + '.gz'));


fileIn
.pipe(zlib.createGzip())
.pipe(printProgress)
.pipe(fileOut)
.on('finish', () => {
    const totalTime = new Date() - startTime;
    console.log(`\nCompression Finished in ${totalTime/1000} Seconds`);
})

/**
 * 1. pipe the file read stream into zlib gzip for compressing
 * 2. pipe the result which acts as input for the writable stream and print the progress
 * 3. pass the chunk / transform the chunk as it is to the file write stream to be written as a new file
 * 4. after all the data is flushed to the underlying write stream, 'finish' event is triggered. This will cause the .on('finish') to execute
 */
