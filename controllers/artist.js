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
    console.log(artistToSave, "eeooooooo")
    const savedArtist = await artistToSave.save();
    console.log(savedArtist, "que pasa aqui chalao")
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

module.exports = {
  prueba,
  saveArtist,
};
