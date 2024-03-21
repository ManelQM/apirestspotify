const express = require("express"); 

const router = express.Router();

const SongController = require("../controllers/song");
const authorization = require("../middleware/authMiddleware");


router.get("/demouser", SongController.prueba);
router.post("/savesong", authorization.auth,SongController.saveSong);

module.exports = router; 