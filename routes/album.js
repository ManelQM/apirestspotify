const express = require("express"); 

const router = express.Router();

const AlbumController = require("../controllers/album");
const authorization = require("../middleware/authMiddleware"); 

router.get("/demouser",AlbumController.prueba);
router.post("/addalbum", authorization.auth,AlbumController.createAlbum);

module.exports = router; 