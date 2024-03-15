const Album = require("../models/album");

// RUTA PRUEBA
const prueba = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: "Ruta prueba album",
    });
  } catch {
    return res.status(400).json({
      status: "error",
      message: "INERNAL SERVER ERROR",
    });
  }
};

const createAlbum = async (req, res) => {
  try {
    let params = req.body;
    if (!params) {
      return res.status(400).json({
        status: "error",
        message: "Please complete the required fields",
      });
    }

    let newAlbum = new Album(params);
   

    const albumStored = await newAlbum.save();
    if (!albumStored) {
      return res.status(400).json({
        status: "error",
        message: "Cant save the Album",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Album created",
      albumStored,
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
  createAlbum,
};
