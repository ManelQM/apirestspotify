const express = require("express");

const router = express.Router();

const ArtistController = require("../controllers/artist");
const authorization = require("../middleware/authMiddleware");

router.get("/demouser", ArtistController.prueba);
router.post("/saveartist", authorization.auth, ArtistController.saveArtist);
router.get("/getArtist/:id", authorization.auth,ArtistController.getArtist); 
router.get("/getallartist/:page?", authorization.auth,ArtistController.getAllArtist); 


module.exports = router;
