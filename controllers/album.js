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

const getOneAlbum = async (req, res) => {
  try {
    let albumId = req.params.id;
    const album = await Album.findById(id);
    if (!albumId || !album) {
      return res.status(400).json({
        status: "error",
        message: "Cant find the album",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "This is your album",
      album: album,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getAllArtistAlbums = async (req, res) => {

  try{

  }catch{

  }

}; 

module.exports = {
  prueba,
  createAlbum,
  getOneAlbum,
  getAllArtistAlbums,
};
