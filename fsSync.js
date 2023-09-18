const fs = require('fs');
const os = require('os')

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// write file

fs.writeFileSync('syncFIle.txt','New file with sync opt')


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// read File

const readFile = fs.readFileSync('syncFile.txt','utf-8');
console.log(readFile);


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// append file

const appendFile = fs.appendFileSync('syncFile.txt', os.EOL + 'New data Appended'+ os.EOL);
console.log(appendFile); // Undefined --------------> if you wanna check this data then use read method


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// delete file 

fs.writeFileSync('demoSync.txt','');
fs.writeFileSync('demoSync1.txt','');


fs.unlinkSync('demoSync1.txt')

console.log('file delete successfully');