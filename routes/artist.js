const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArtistController = require("../controllers/artist");
const authorization = require("../middleware/authMiddleware");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/albumcover/")
    },
    filename: (req, file, cb) => {
        cb(null, "cover-" + Date.now() + "-" + file.originalname)
    }
})

const uploads = multer({storage:storage}); 

router.get("/demouser", ArtistController.prueba);
router.post("/saveartist", authorization.auth, ArtistController.saveArtist);
router.get("/getArtist/:id?", authorization.auth,ArtistController.getArtist); 
router.get("/getallartist/:page?", authorization.auth,ArtistController.getAllArtist);
router.put("/updateartist/:id?", authorization.auth,ArtistController.updateArtist);  
router.delete("/deleteartist/:id?", authorization.auth, ArtistController.deleteArtist); 
router.post("/uploadalbumcover/:id?", authorization.auth,[uploads.single("file0")], ArtistController.uploadAlbumCover);

module.exports = router;
