/**
 * We will be creating an implementation of writable stream.
 * Similar to process.stdout
 * Using the Writable Constructor of streams
 */

const { Writable } = require('stream'); // ES6 Destructing assignment in which any field/class/etc by the name can be directly required and accessed using { } from the given module/package
// here we are requiring the Writable interface and constructing an object from it and implement a write method in the stream's configuration

const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(outStream); // source.pipe(destination) // connecting a readable stream to a writable stream we just created

/**
 * process.stdin is a readable stream..
 * similar to outStream is process.stdout which does the same thing
 * process.stdin.pipe(process.stdout) will perform the same thing
 */