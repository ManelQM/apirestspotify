const express = require("express"); 

const router = express.Router();

const ArtistController = require("../controllers/artist");

router.get("/demouser",ArtistController.prueba);

module.exports = router; 