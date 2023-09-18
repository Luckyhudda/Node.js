const fs = require('fs');



///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Write file....

const file = 'some random text for a text file ......'
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



///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//   *********** Read File *************


fs.readFile('data.json','utf-8',(err,data)=>{
    if(err){
        console.log('Error',err);
        return;
    }
    console.log(data);
})



///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//   *********** Append File *************

const newData = [1,2,3,4,5,6]
fs.appendFile('firstFile.js', JSON.stringify(newData),(err,data)=>{
    if(err){
        console.log('something wrong in append functionality',err);
        return
    }
    if(data){
        data = '';
        console.log('Data Replace successfully');
    }
})


///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// if you want to replace tha whole previous data .....than use this...

const finalData = ['one','two', 'three','four'];


fs.writeFile('firstFile.js',JSON.stringify(finalData),(err,data)=>{
    if(err){
        console.log('SomeThing went Wrong');
        return;
    }
    console.log('data replace SuccessFully');
})








///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Delete Data....

fs.writeFile('demo.txt','Demo file',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('New File Create for Demo');
})

// now delete file

fs.unlink('demo.txt',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File delete SuccessFully....');
})