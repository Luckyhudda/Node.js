const fs = require('fs');
const path = require('path')


//First read File.....
const readStreamFile =  fs.createReadStream(path.join(__dirname, 'bigFile.txt'));
// console.log(readStreamFile);

// Write the data in new File....
const writeStreamFile = fs.createWriteStream(path.join(__dirname,'newBigFile.txt'));


// PIPE BOTH FILE FOR TRANSFER DATA IN CHUNKS ...
readStreamFile.pipe(writeStreamFile);


//// Notify when file write successfully....
writeStreamFile.on('finish', () =>{
    console.log('data written successfully');
});

// Catch the error....

readStreamFile.on('error', () =>{
    console.log('Something wrong is read File');
})

writeStreamFile.on('error', () =>{
    console.log('Something wrong in write File');
})

