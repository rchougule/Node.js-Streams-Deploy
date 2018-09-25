/**
 * efficient method of readable.js
 * Instead of pushing all the data at once, we push it, we read it, we print it.
 * On demand method
 * 
 * String.fromCharCode is a Static method to convert the number into char.
 */

const { Readable } = require('stream');

const inStream = new Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if(this.currentCharCode > 90)
            this.push(null);
    }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);