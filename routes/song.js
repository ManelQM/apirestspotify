const express = require("express"); 

const router = express.Router();

const SongController = require("../controllers/song");

router.get("/demouser",SongController.prueba);

module.exports = router; 