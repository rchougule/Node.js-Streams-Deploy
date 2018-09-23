STREAMS
=======
- This example depicts how using streams can help in Node.js not using up unnecessary resources.
- 1. Sending a file all at once after reading it. In one chunk. Node.js starts using heavy resources because of the file being loaded in the memory.
- 2. Sending a file in chunks by creating a readable stream and connecting it to a writable stream, i.e, the response object..