const Artist = require("../models/artist");

// RUTA PRUEBA
const prueba = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: "Ruta prueba artist",
    });
  } catch {
    return res.status(400).json({
      status: "error",
      message: "INERNAL SERVER ERROR",
    });
  }
};

const saveArtist = async (req, res) => {
  try {
    //RECOGER DATOS DEL BODY
    let params = req.body;
    //CREAR OBJETO A GUARDAR
    let artistToSave = new Artist(params);
    artistToSave.user = req.authorization.id;
    //GUARDAMOS ARTISTA
    const savedArtist = await artistToSave.save();
   
    if (!savedArtist) {
      return res.status(404).json({
        status: "error",
        message: "Cant save the artist",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Artist saved!",
      artist: savedArtist,
    });
  } catch(error) {
    console.error("Message ERROR", error)
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getArtist = async (req, res) => {
    try{
        const artistId = req.params.id; 
        const getOneArtist = await Artist.findById(artistId); 
        
        if(!artistId || !getOneArtist) {
            return res.status(400).json({
                status: "error",
                message: "Cant find the artis :(",
            })
        }
        return res.status(200).json({
            status: "succes",
            message: "Here is your artist ",
            artist: getOneArtist,
        })
    }catch (error){
        console.error(error);
        return res.status(400).json({
            status: "error",
            message: "INTERNAL SERVER ERROR",
        });
    }
};

module.exports = {
  prueba,
  saveArtist,
  getArtist,
};
