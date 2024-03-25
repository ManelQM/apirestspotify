const express = require("express"); 

const router = express.Router();

const SongController = require("../controllers/song");
const authorization = require("../middleware/authMiddleware");


router.get("/demouser", SongController.prueba);
router.post("/savesong", authorization.auth,SongController.saveSong);
router.get("/getonesong/:id", authorization.auth,SongController.getSong); 
router.get("/allalbumsongs/:id", authorization.auth, SongController.getAllSongsAlbum);

module.exports = router; 