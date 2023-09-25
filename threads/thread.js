const fs = require('fs');
const path = require('path')

// // change thread poll limit..
// process.env.uv.THREADPOLL_SIZE == 1;

setTimeout(() => {
    console.log('first Timer Expired')
}, 0);

setImmediate(() => console.log('setImmediate Function '));

fs.readFile(path.join(__dirname, 'file.txt'), 'utf-8',(err,data) =>{
    if(err){
        console.log('Error');
        return;
    }
    console.log(data);
})

console.log('Last console');

// const nextPromish = () =>{
//     return new Promise((res, rej) =>{
//         if(res){
//            res('resolved');
//         }else{
//             rej('console.error();');
//         }
//     })
// };
// nextPromish().then(data => console.log(data)).catch((err) => console.log(err))