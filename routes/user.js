const express = require("express"); 
const router = express.Router();
const multer = require("multer"); 
const UserController = require("../controllers/user");
const authorization = require("../middleware/authMiddleware"); 

//MULTER STORAGE FILES

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads/avatars/")
    },
    filename: (req,file,cb) => {
        cb(null, "avatar-" + Date.now()+"-"+file.originalname); 
    }
});

// CREATE STORAGE

const uploads = multer({storage:storage});  

router.get("/demouser", UserController.prueba);
router.post("/register", UserController.register);
router.get("/login", UserController.login);
router.get("/getprofile/:id", authorization.auth,UserController.getProfile);
router.put("/updateprofile",authorization.auth,UserController.updateUserProfile); 
router.post("/uploadavatar", authorization.auth,[uploads.single("file0")], UserController.uploadAvatar); 
router.get("/getavatar/:file", authorization.auth, UserController.getUserAvatar);


module.exports = router;  