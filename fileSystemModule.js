const fs = require('fs');


// Write file....
const file = 'New File Added With Write File System Module'
fs.writeFile('firstFile.js', file, (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File added Successfully');
})

fs.writeFile('file.txt',file,(err,data)=>{
    if(err){
        console.log('error', err);
        return;
    }
    console.log('Text file added');
})


const finaldata = [{
    name: 'Lilly',
    age: 22,
    email: 'lilly@gmail.com'
},
{
    name: 'Rajesh',
    age: 23,
}]
fs.writeFile("data.json", JSON.stringify((finaldata)), (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File added Successfully");
});