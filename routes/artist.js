const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArtistController = require("../controllers/artist");
const authorization = require("../middleware/authMiddleware");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/artistImage/")
    },
    filename: (req, file, cb) => {
        cb(null, "cover-" + Date.now() + "-" + file.originalname)
    }
})

const uploads = multer({storage:storage}); 

router.post("/createartist", authorization.auth, ArtistController.createArtist);
router.get("/getartist/:id?", authorization.auth,ArtistController.getArtist); 
router.get("/getallartist/:page?", authorization.auth,ArtistController.getAllArtist);
router.put("/updateartist/:id?", authorization.auth,ArtistController.updateArtist);  
router.delete("/deleteartist/:id?", authorization.auth, ArtistController.deleteArtist); 
router.post("/uploadartistimg/:id?", authorization.auth,[uploads.single("file0")], ArtistController.uploadArtistImg);
router.get("/artistimg/:file?", authorization.auth,ArtistController.getArtistImg); 

module.exports = router;
