// const fs = require('fs');
// const http = require('http');
// const HomePage = fs.readFileSync('home.html','utf-8');

// const listner = (req,res) =>{
//     console.log(req.method);
//     console.log(req.url);
//     if(req.url == '/home'){
//         // const data = fs.readFile("home.html", "utf-8", (err, data) => {
//         //   if (err) {
//         //     console.log(err);
//         //     return;
//         //   }
//         //   console.log(data);
//         // });

//         res.write(HomePage);
//         res.end()
//     }
//     else{

//         res.end('file does not match')
//     }

// }


// const server = http.createServer(listner);

// server.listen(8090,() =>{
//    console.log('file added')
// })