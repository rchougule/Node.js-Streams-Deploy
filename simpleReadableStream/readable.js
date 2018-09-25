/**
 * creating a readable stream
 * 1. inefficient way
 * 2. efficient - on demand way
 */

 // require the Readable interface from the stream module
const { Readable } = require('stream');

// implement the read method by creating a new object of the readable interface
const inStream = new Readable({
    read() {}
})

// push data into the stream
inStream.push('ABCDEFGHIJKLSMNROHANCHOUGULE');
inStream.push('123456789');
inStream.push(null); // null to specify the end of the incoming data

// connecting the readable stream to stdout.
inStream.pipe(process.stdout);

/**
 * inefficient because we are pushing the data first into the stream totally
 * then piping it with process.stdout
 */