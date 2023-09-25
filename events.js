const EventEmitter = require("events");
const fs = require("fs");
const http = require("http");

const firstEmitter = new EventEmitter();


////////////////////////////// On Event
firstEmitter.on("click", () => {
  console.log("Event Triggred");
});




/////////////////////////////////////////// Once Event
firstEmitter.once('readFiles', () =>{
    console.log('File read successfully');
})

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    firstEmitter.emit("click");
    res.end("home-page");
    fs.readFile('file.txt','utf-8',(err,data) =>{
        if(err){
            console.log('Something wrong',err);
        }
        else{
            console.log(data);
            firstEmitter.emit("readFiles");
        }
    })
  }
});

server.listen(8999);


////////////////////////////////////////////
// Data core Event...

const readableFile = fs.createReadStream('readFile.txt');

readableFile.on('data', chunk =>{
    console.log(`${chunk.length} files matched`)
})

readableFile.on('end', () =>{
    console.log('data Finished');
})


///////////////////////////////////////////////
//finish Event

const writeable = fs.createWriteStream('writefile.txt');


writeable.write('some random text')
writeable.write('some random text')
writeable.write('some random text')
writeable.write('some random text')
writeable.write('some random text')

writeable.end();

writeable.on('finish', () =>{
    console.log('data write successfully line no. 69');
})

