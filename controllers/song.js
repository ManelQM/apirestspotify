const Song = require("../models/song");

// RUTA PRUEBA
const prueba = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: "Ruta prueba song",
    });
  } catch {
    return res.status(400).json({
      status: "error",
      message: "INERNAL SERVER ERROR",
    });
  }
};

const saveSong = async (req, res) => {
  try {
    let songParams = req.body;

    let song = new Song(songParams);
    song.file= null;
    const songToSave = await song.save();
    if (!songToSave) {
      return res.status(404).json({
        status: "error",
        message: "Cant save the song",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Song saved!",
      song: songToSave,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};



module.exports = {
  prueba,
  saveSong,
};
