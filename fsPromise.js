const fs = require('fs');
const os = require('os')

////////////////////////////////////////
//////////////////////////////////////////
// fsPromishe...

fs.promises.writeFile('data.txt','promise data').then((data)=>{
    console.log('data write successfully');
}).catch((err) => {
    console.log(err);
})


////////////////////////////////////////
//////////////////////////////////////////
// //// read
 fs.promises.readFile('newPromise.txt','utf-8').then(data=> console.log('data read',data)).catch(err=> console.log(err))





 ////////////////////////////////////////
//////////////////////////////////////////
 // append file

 fs.promises.appendFile('newPromise.txt', os.EOL + 'new data appended with promish' + os.EOL,).then((data)=>{
    console.log('data appended');
 }).catch((err) => {
    console.log('BUG:', err);
 })



 ////////////////////////////////////////
//////////////////////////////////////////
// delete file 

 fs.promises.unlink('data.txt2').then((data)=>{
    console.log('file deleted');
 }).catch((err)=>{
    console.log('something wrong');
 })