const express = require("express");
const fs = require('fs')
const {engine} = require('express-handlebars');
const path = require("path");
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views','./views');

const listfile = fs.readFileSync(path.join(__dirname,'data.json'),'utf-8')
const list = JSON.parse(listfile)
app.get('/home',(req,res) =>{
    res.render('home');
})
app.get('/students',(req,res) =>{
    res.render('students',{list: list});
})


app.listen(8090)