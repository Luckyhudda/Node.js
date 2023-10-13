const express = require("express");
const {
  middlewareOne,
  middlewareTwo,
  middlewareThree,
  routeslevelMiddleware,
  passwordProtection,
} = require("../middleware/middleware");
const {
  homeController,
  passwordController,
  passwordProtector,
} = require("../controller/controller");
const router = express.Router();

// router.use(routeslevelMiddleware);

router.get("/home", middlewareOne, middlewareTwo, homeController);

router.get("/pass", middlewareThree, passwordController);
router.post("/password", passwordProtection, passwordProtector);

module.exports = router;
