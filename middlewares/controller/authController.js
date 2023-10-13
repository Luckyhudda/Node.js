const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");


const signup = (req, res,next) => {

    // read the file ............
    fs.readFile(path.join(__dirname,'users.json'),'utf-8',(err,data) =>{
        if(err){
            next(err);
            return;
        }
        // check data...
        else if(data.length > 0){

            // if data is present then we check user is exist or not....

            const users = JSON.parse(data);
                console.log(users);
            const user = users.find(el => el.userName == req.body.userName);

            // if user doesn't exist....
            if(!user){
                    users.push(req.body);

                    fs.writeFile(path.join(__dirname,'users.json'), JSON.stringify(users),(err,data) =>{
                        if(err){
                            next('something went wroge to add user....')
                        }
                      res.json({
                        'message': 'user added successfully...:)'
                      })
                    })

            }else{
                    res.json({
                        'message': 'user already exist....'
                    })
            }



        } else{
             fs.writeFile(
               path.join(__dirname, "users.json"),
               JSON.stringify([req.body]),
               (err,data) => {
                 if (err) {
                   next("something went wroge to add user....");
                 }
                 res.json({
                   message: "user added successfully...:)",
                 });
               }
             );
        }
    })

};
const login = (req, res,next) => {
    /// read file of users...

    fs.readFile(path.join(__dirname,'users.json'),'utf-8',(err,data) =>{
        if(err){
            next(err);
            return;
        } 
        else{
            // check user exist or not........
            const users = JSON.parse(data);
            const user = users.find(el => el.userName == req.body.userName);


            // if User Doesn't Exist....

            if(!user){
                next('user Does not exist');
                return;
            }else{
                // if user exist then check password also....

                if(user.password != req.body.password){
                    next('invalid user name and password');
                }else{
                  
                    const token = jwt.sign({ userName: user.userName}, "shhhhh");
                    res.json({
                        token,
                    })
                }
            }


        }
    })
};

module.exports = {
  signup,
  login,
};
