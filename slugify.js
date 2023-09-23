// its a package that provide sluges from url
const slugify = require("slugify");
const fs = require("fs");
const http = require("http");

fs.writeFile("slugify.txt", "some data for slugify file", (err, data) => {
  console.log("file written successfully...");
});

const homePageSlug = "hero section in home page";
const server = http.createServer((req, res) => {
  const sluges = slugify(homePageSlug, {
    lower: true,
  });
  console.log(req.url);
  if (req.url == "/" || req.url == "/home") {
    res.end("home page");
    console.log(sluges);
  }
});

server.listen(8000);
