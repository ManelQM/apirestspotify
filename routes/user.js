const express = require("express"); 

const router = express.Router();

const UserController = require("../controllers/user");

router.get("/demouser",UserController.prueba);

module.exports = router; 