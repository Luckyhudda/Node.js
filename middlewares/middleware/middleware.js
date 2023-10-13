const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


const middlewareOne = (req, res, next) => {
  next();
};

const middlewareTwo = (req, res, next) => {
  next();
};

const middlewareThree = (req, res, next) => {
  res.send("you are failed in access....");
};

const passwordProtection = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
      res.json({
        error: err,
      });
    }
    req.body.password = hash;
    next();
  });
};

const passwordChecker = (req, res, next) => {
  const { password } = req.body;
  const data = req.body;
  console.log(password);
  // const password = req.body.password;
  const pass = password.toString();
  if (pass && password.length >= 8) {
    next();
  } else {
    res.send("invalid password");
  }
};

const emailChecker = (req, res, next) => {
  const email = req.body.email;
  const regEx =
    /^[A-Za-z0-9](([a-zA-Z0-9,\-.!#$%&'*+\/=?^_`{|}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;

  if (email && regEx.test(email)) {
    next();
  } else {
    res.send("Invalid email");
  }
};

const applevelMiddleware = (req, res, next) => {
  console.log("App level middleware");
  next();
};
const routeslevelMiddleware = (req, res, next) => {
  console.log("routes level middleware");
  next();
};

const JWTmiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(401).json({
      message: "Please provide valid token",
    });

    return;
  } else {
    try {
      var decoded = jwt.verify(token, "shhhhh");
      console.log(decoded);
      next();
    } catch (err) {
      console.log(err);
      next("Invalid token");
    }
  }
};

const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({
    error: err.toString(),
  });
};

module.exports = {
  middlewareOne,
  middlewareTwo,
  middlewareThree,
  passwordChecker,
  emailChecker,
  applevelMiddleware,
  routeslevelMiddleware,
  passwordProtection,
  errorMiddleware,
  JWTmiddleware,
};
