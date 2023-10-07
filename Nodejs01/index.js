const fs = require("fs");
const fsPromise = require("fs/promises");
const path = require("path");
const eventEmitter = require('events');
const eventHandler = new eventEmitter();















// const readStream = fs.createReadStream('data.txt','utf-8');
// const writeStream = fs.createWriteStream('text.txt');

// readStream.pipe(writeStream)



// eventHandler.on('createFile',(data)=>{
//   console.log(data);
// })

// fs.writeFile('data.txt','file created',(err,data) =>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   eventHandler.emit('createFile','file created')
// })



// fs.writeFileSync(path.join(__dirname, "./fs_modules/file.txt"), "file added");
// console.log('hello');

// fs.writeFile(path.join(__dirname, "./fs_modules/demo.txt"), "New data", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created....");
// });

// console.log(
//   fs.readFileSync(path.join(__dirname, "./fs_modules/demo.txt"), "utf-8")
// );

// fs.promises.unlink(path.join(__dirname, "./fs_modules/file.txt"));

// // callback to promise...

// const aPromise = (file) =>{
//   const newpromise = new Promise((res,rej) =>{
//     fs.readFile(file,'utf-8',(err,data) =>{
//       if(err){
//         rej(err);
//       }
//       res(data);
//     });
//   });
//   return newpromise;
// }

// aPromise(path.join(__dirname, "./fs_modules/demo.txt")).then(result => console.log('result in promise', result)).catch(err=> console.log(err));


// // read Directorey.....
// const mainDir = 'dirList';
// const dirListArr = [];


// function rescursiveDir(dir){

// const files = fs.readdirSync(dir);
// console.log(files);
// for(let i = 0; i < files.length;i++){
//   const filepath = `${dir}/${files[i]}`
//   if (fs.lstatSync(filepath).isDirectory()) {
//     rescursiveDir(filepath);
//   }else{
//     dirListArr.push(filepath)
//   }

// }

// };
// rescursiveDir(mainDir);
// console.log(dirListArr);

// fs.readdir(path.join(__dirname, mainDir),(err,data) =>{
//   if(err){
//     console.log(err.message);
//     return;
//   }
//   if(!(fs.lstatSync(path.join(__dirname, mainDir)).isDirectory()){
    
//   })
// }
// })