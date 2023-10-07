const fs = require("fs");
const path = require("path");


const createPromise = (data) =>{
    const promisefn = new Promise((res,rej) =>{
      // read File........
      console.log(data);
      fs.readFile(path.join(__dirname, "ds.json"), (err, fileData) => {
        if (err) {
            rej(err,null)
         // console.log(err);
          return;
        }
        if (fileData.length > 0) {
          let obj = JSON.parse(fileData);
          obj.push(data);
          fs.writeFile(
            path.join(__dirname, "ds.json"),
            JSON.stringify(obj),
            (err, result) => {
              if (err) {
                   rej(err, null);
              //  console.log(err);
                return;
              }
              res(null,'success')
              console.log("File created with new data....");
            }
          );
        } else {
          fs.writeFile(
            path.join(__dirname, "ds.json"),
            JSON.stringify([data]),
            (err, newResult) => {
              if (err) {
                   rej(err, null);
              //  console.log(err);
                return;
              }
              res(null,'success')
              console.log("New file created ....");
            }
          );
        }
      });
    })
    return promisefn
  
}

const deletePromise = (data) =>{
    const promise = new Promise((res,rej) =>{
        fs.readFile(path.join(__dirname,'ds.json'),'utf-8',(err,fileData) =>{
            if(err){
                rej(err,null);
                return;
            };
            if(fileData.length < 0){
                res(null,'File does not exist')
            }else{
                let obj = JSON.parse(fileData);

                const findIndex = obj.findIndex(el => el.id === data.id);
                obj.splice(findIndex,1);
                fs.writeFile(path.join(__dirname,'ds.json'),JSON.stringify(obj),(err,result) =>{
                    if(err){
                        rej(err,null);
                        return
                    }
                    res(null, 'data deleted from file....')
                })
            }
        })

    })
    return promise;
}


const UpdatePromise = (data) =>{
    const promise = new Promise((res,rej) =>{
            // read ds file ....
            fs.readFile(path.join(__dirname,'ds.json'),'utf-8',(err,fileData) =>{
                if(err){
                    rej(err,null);
                    return
                }
                if(fileData.length > 0){
                        const obj = JSON.parse(fileData);
                        const filterData = obj.filter(el => el.id !== data.id);
                        filterData.push(data);
                       
                        fs.writeFile(
                          path.join(__dirname, "ds.json"),
                          JSON.stringify(filterData),
                          (err, result) => {
                            if (err) {
                              rej(err, null);
                            }
                            res(null, "file update 👍  ");
                          }
                        );
                }else{
                    console.log('file does not exist');
                    res(null , 'file does not exist')
                }
            })
    })
    return promise;
}

module.exports = {
  createPromise,
  deletePromise,
  UpdatePromise,
};