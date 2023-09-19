const fs = require("fs");
const os = require("os");


//////////////////////////////////////
// callback hell handle by fs modules....
fs.readFile("file2.txt", "utf-8", (err, data) => {
  fs.readFile(`${data}.txt`, "utf-8", (err, data1) => {
    fs.writeFile("file3.txt", "final data of list", (err, data3) => {
      fs.appendFile(
        "file3.txt",
        os.EOL + `data added in file 3 ${data1}`,
        (err, data4) => {
          fs.readFile("file3.txt", "utf-8", (err, finalData) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(finalData);
          });
        }
      );
    });
  });
});
