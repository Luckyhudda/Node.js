const homeController = (req, res) => {
  res.send("Get Data fom Homepage");
};
const passwordController = (req, res) => {
  res.send("welCome to the home page");
};
const passwordProtector = (req, res) => {
  res.json({
    protectedPass: req.body.password,
  });
};


module.exports = {
  homeController,
  passwordController,
  passwordProtector,
};