TRANSFORM STREAM AND COMPRESSION PROGRESS BAR
=============================================

- **'finish'** is emitted after the stream.end() method is called and all the data has been pushed into the underlying stream
- **'end'** is emitted when there is no more data to be consumed by the stream.

EVENTS 'finish' and 'end'
=========================

1. The first readable stream will emit an 'end' after reading from the input file for compression
2. The zlib stream will emit an 'end' and 'finish' event as soon as it consumes all the data coming from the readable stream and flushes the data into the underlying system. Since it's a transform stream, it will take in chunks and release the chunks. When all the incoming chunks are done, 'end' is emitted, and when all the chunks are released 'finish' is emitted.
3. Transform stream printProgress will emit 'end' and 'finish' it receives all the chunks and then releases it.
4. Finally, out stream will emit 'finish' when it has flushed everything into the stream...