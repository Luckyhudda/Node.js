const express = require('express');
const app = express();
const path = require('path')

/////////////////////////////////Get...............
// app.get('/',(req,res) =>{
//     res.send('Hello from server')
// })
// app.get('/html',(req,res) =>{
//     res.sendFile(path.join(__dirname, "index.html"));
// })
// app.get('/api',(req,res) =>{
//     res.json({
//         name: 'Lucky',
//         age: 22,
//     });
// })

app.get('/data/:id',(req,res) =>{
    const studentId = req.params.id;
    res.json(
        {
            name: 'Lick',
            id: studentId
        }
    )
})
app.get('/data',(req,res) =>{
    const name = req.query.name;
    const city = req.query.city;
    res.json(
        {
            name: name,
            city,
        }
    )
})

app.get('*',(req,res) =>{
    res.send('Error Page')
})


app.listen(8989);