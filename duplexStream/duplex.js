/**
 * Duplex object which does the work of both readable and writable stream.
 * As it it implements both the Readable and Writable interfaces
 */

const { Duplex } = require('stream');

const dupStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++))
        if(this.currentCharCode > 90)
            this.push(null);
    }

})

const dupStream2 = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {        
        //this.push(String.fromCharCode(this.currentChar++));
        console.log('## read called ##\n');
        //if(this.currentChar >= 90) 
        //    this.push(null);

    }
})

//dupStream.currentCharCode = 65;

//process.stdin.pipe(dupStream).pipe(process.stdout);

//dupStream2.currentChar = 65;

process.stdin.pipe(dupStream2).pipe(process.stdout);


//dupStream.push('testing String');
//dupStream.push(null);
//dupStream.push('appears if no error')