
const fs = require('fs'); 

const path = 'C:/Users/BS-1039/Desktop/SHARIF/NODE_JS/STREAMBUFFER/bigData.txt';

const streamData = fs.createReadStream(path);

streamData.on('data', (chunk)=>{
    console.log(chunk.toString());
})