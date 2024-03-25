const express = require("express"); 
const router = express.Router();
const multer = require("multer");
const AlbumController = require("../controllers/album");
const authorization = require("../middleware/authMiddleware"); 
const album = require("../models/album");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/album/")
    },
    filename: (req, file, cb) => {
        cb(null, "albumimg-" + Date.now() + "-" + file.originalname)
    }
})

const uploads = multer({storage:storage});

router.get("/demouser", AlbumController.prueba);
router.post("/addalbum", authorization.auth, AlbumController.createAlbum);
router.get("/getonealbum/:id?", authorization.auth , AlbumController.getOneAlbum); 
router.get("/allartistalbums/:id?", authorization.auth, AlbumController.getAllArtistAlbums);
router.put("/updatealbum/:id?", authorization.auth, AlbumController.updateAlbum);
router.post("/uploadalbumimg/:id?", authorization.auth,[uploads.single("file0")], AlbumController.uploadAlbumImg);
router.get("/albumimg/:file?", authorization.auth,AlbumController.getAlbumImg); 

module.exports = router; 