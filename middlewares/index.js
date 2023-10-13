const express = require("express");

const {
  middlewareOne,
  middlewareTwo,
  middlewareThree,
  emailChecker,
  passwordChecker,
  applevelMiddleware,
  errorMiddleware,
  JWTmiddleware,
} = require("./middleware/middleware");
const {
  homeController,
  passwordController,
} = require("./controller/controller");
const cors = require('cors');

const middlewareRoute = require('./routes/middleware')
const authRoute = require('./routes/auth')

const app = express();
app.use(cors())
app.use(express.json());

// app.use(applevelMiddleware);




app.use('/auth', authRoute)

app.use(JWTmiddleware); // its block next routes if authentication will be fail...
app.use("/", middlewareRoute);

app.use(errorMiddleware)
app.listen(8900,() => {
  console.log('server started');
});
