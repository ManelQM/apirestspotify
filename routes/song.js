const express = require("express"); 
const router = express.Router();
const multer = require("multer"); 
const SongController = require("../controllers/song");
const authorization = require("../middleware/authMiddleware");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/songs/")
    },
    filename: (req, file, cb) => {
        cb(null, "song-" + Date.now() + "-" + file.originalname)
    }
});

const uploads = multer({storage:storage}); 

router.get("/demouser", SongController.prueba);
router.post("/savesong", authorization.auth,SongController.saveSong);
router.get("/getonesong/:id", authorization.auth,SongController.getSong); 
router.get("/allalbumsongs/:id", authorization.auth, SongController.getAllSongsAlbum);
router.put("/updatesong/:id", authorization.auth,SongController.updateSong); 
router.delete("/deletesong/:id", authorization.auth,SongController.deleteSong);
router.post("/uploadsong/:id", authorization.auth,[uploads.single("file0")], SongController.uploadSongToAlbum);
router.get("/audiosong/:file", authorization.auth, SongController.getTheSongForListen); 

module.exports = router; 