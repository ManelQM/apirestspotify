const express = require("express"); 

const router = express.Router();

const AlbumController = require("../controllers/album");

router.get("/demouser",AlbumController.prueba);

module.exports = router; 