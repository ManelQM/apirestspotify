const express = require("express"); 
const router = express.Router();
const UserController = require("../controllers/user");
const authorization = require("../middleware/authMiddleware"); 

router.get("/demouser", UserController.prueba);
router.post("/register", UserController.register);
router.get("/login", UserController.login);
router.get("/getprofile/:id", authorization.auth,UserController.getProfile);
router.put("/updateprofile",authorization.auth,UserController.updateUserProfile); 

module.exports = router;  