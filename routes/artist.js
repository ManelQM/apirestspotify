const express = require("express");

const router = express.Router();

const ArtistController = require("../controllers/artist");
const authorization = require("../middleware/authMiddleware");

router.get("/demouser", ArtistController.prueba);
router.post("/saveartist", authorization.auth, ArtistController.saveArtist);
router.get("/getArtist/:id?", authorization.auth,ArtistController.getArtist); 
router.get("/getallartist/:page?", authorization.auth,ArtistController.getAllArtist);
router.put("/updateartist/:id?", authorization.auth,ArtistController.updateArtist);  
router.delete("/deleteArtist/:id?", authorization.auth, ArtistController.deleteArtist); 


module.exports = router;
