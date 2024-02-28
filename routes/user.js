const express = require("express"); 

const router = express.Router();

const UserController = require("../controllers/user");

router.get("/demouser",UserController.prueba);
router.post("/register",UserController.register);
router.get("/login",UserController.login);

module.exports = router; 