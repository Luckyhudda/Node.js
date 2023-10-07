const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("home.html", "utf-8");
const aboutPage = fs.readFileSync("about.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.end("get method .....");
  }

  if (req.method == "POST") {
    let finalData = "";
    req.on("data", (chunk) => {
      finalData = finalData + chunk;
    });
    req.on("end", () => {
      console.log(finalData);
      fs.writeFile("data.json", finalData.toString(), (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("file created");
      });
      res.end("data added");
    });
  }
  if (req.method == "DELETE") {
    let studentList;
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      studentList = JSON.parse(data);
      let lastData = "";
      req.on("data", (chunk) => {
        lastData = lastData + chunk;
        res.end("logged");
      });
      req.on("end", (err, data) => {
        const obj = JSON.parse(lastData);
        if (err) {
          console.log(err);
          return;
        }
        const deletedIndex = studentList.findIndex((el) => el.id === obj.id);
        console.log(studentList);
        studentList.splice(deletedIndex, 1);

        //    res.end('data delete form  file....')
        console.log(studentList);
      });
    });
  }

  if (req.method == "PUT") {
    let webData = "";
    req.on("data", (chunk) => {
      webData = webData + chunk;
    });

    req.on("end", (err, result) => {
      updatedItem = JSON.parse(webData);
      if (err) {
        console.log(err);
        return;
      }
      fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
       if(data.length > 0){
         students = JSON.parse(data);
         const filterdObj = students.filter((el) => el.id !== updatedItem.id);
         console.log(filterdObj);
         filterdObj.push(updatedItem);
         fs.writeFile("data.json", JSON.stringify(filterdObj), (err, data) => {
           if (err) {
             console.log(err);
             return;
           }
           console.log("done");
         });
       }else{

           console.log('data does not exist in file')
       }
      });
    });
    res.end("updated ");
  }

  // if(req.url == '/'){
  //     res.end('File matched')
  // }
  // if(req.url == '/home'){
  //     res.write(homePage);
  //     res.end()
  // }
  // if(req.url == '/about'){
  //     res.write(aboutPage);
  //     res.end()
  // }
  // if(req.url == '*'){
  //     res.end('File does not matched')
  // }
});

server.listen(8990, () => {
  console.log("server started....");
});
