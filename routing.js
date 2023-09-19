const http = require("http");
const os = require("os");
const fs = require("fs");

//////////////////////////////////////
// routing some pages with help of HTTP node module

const homePage = fs.readFileSync("home.html", "utf-8");
const aboutPage = fs.readFileSync("about.html", "utf-8");
const servicePage = fs.readFileSync("service.html", "utf-8");
const errorPage = fs.readFileSync("notFound.html", "utf-8");
const digikullEmpList = fs.readFileSync('digikullEmp.json','utf-8');

const server = http.createServer((req, res) => {
  // console.log(res);
  if (req.url == "/" || req.url == "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(homePage);
  } else if(req.url === '/about'){
     res.end(aboutPage);
  } else if(req.url === '/services'){
     res.end(servicePage);
  }else if(req.url === '/digikull'){
    res.writeHead(200,{
        'Content-Type' : 'application/json'
    })
    res.end(digikullEmpList)
  } else {
    res.end(errorPage);
  }
});

server.listen(5050);
