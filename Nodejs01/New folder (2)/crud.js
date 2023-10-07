const express = require("express");
const fs = require("fs");
const path = require("path");
const {
  createPromise,
  deletePromise,
  UpdatePromise,
} = require("./repository/db");
const app = express();
app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send('Hello from server....')
// })
// app.get('/html',(req,res)=>{
//     res.sendFile(path.join(__dirname, "index.html"));
// })
// app.get('/api',(req,res)=>{
//     res.json({
//         name: 'Lucky'
//     })
// })

app.post("/create", (req, res) => {
  const data = req.body;
  createPromise(data)
    .then(() => {
      console.log("File created");
      res.send("File created....");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: "Fail",
        message: "File creation failed.",
        error: err.message, // You can include more details about the error if needed
      });
    });
});

app.delete("/delete", (req, res) => {
  const data = req.body;
  deletePromise(data)
    .then((result) => {
        console.log(result);
      res.send("file deleted successfully");
    })
    .catch((err) => res.send("something went wrong in file deletetion"));
});
app.put("/update", (req, res) => {
  const data = req.body;
  UpdatePromise(data)
    .then((result) => {
      res.send('file update....');
    })
    .catch((err) => res.send("something went wrong in file Updation"));
});

app.listen(8090);
