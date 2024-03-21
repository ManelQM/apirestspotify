const Album = require("../models/album");
const mongoosePagination = require("mongoose-pagination");
const fs = require("fs");
const path = require("path");

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
  try {
    const artistId = req.params.id;

    let page = 1;

    if (req.params.page) page = req.params.page;

    const itemsPerPage = 10;

    const allArtistAlbums = await Album.find({ artist: artistId })
      .sort({ created_at: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    if (!allArtistAlbums) {
      return res.status(404).json({
        status: "error",
        message: "Cant find the albums list of this artist",
      });
    }
    const albumsWithArtistName = allArtistAlbums.map((album) => ({
      ...album.toObject(),
      artist: album.artist.name, //TODO: AGREGAR EL NOMBRE DE ARTIST EN LOS ALBUMS
    }));
    return res.status(200).json({
      status: "success",
      message: "Albums of this user",
      page,
      album: albumsWithArtistName,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateAlbum = async (req, res) => {
  try {
    let albumId = req.params.id;

    let updateDataAlbum = req.body;

    const updateThisAlbum = await Album.findByIdAndUpdate(
      albumId,
      updateDataAlbum,
      { new: true }
    );
    if (!updateThisAlbum) {
      return res.status(404).json({
        status: "error",
        message: "Cant update the album",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Album updated!",
      album: updateThisAlbum,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const uploadAlbumImg = async (req, res) => {
  try {
    const albumId = req.params.id; // ID DEL ALBUM AL QUE VAMOS AÑADIR LA IMG
    if (!req.file) {
      return res.status(404).json({
        status: "error",
        message: "Please add an Image",
      });
    }
    //CONSEGUIR NOMBRE DEL ARCHIVO
    let image = req.file.originalname;
    //EXTENSIÓN ARCHIVO
    const imageSplit = image.split(".");
    const extension = imageSplit[1];
    //COMPROBAR EXTENSIÓN
    if (
      extension !== "png" &&
      extension !== "jpg" &&
      extension !== "jpge" &&
      extension !== "gif"
    ) {
      //EN CASO DE EXTENSIÓN INCORRECTA BORRAMOS LA IMAGEN
      const filePath = req.file.path;
      const fileDeleted = fs.unlinkSync(filePath);
      return res.status(400).json({
        status: "error",
        message: "Invalid extension file",
      });
    }

    //SI ES CORRECTO GUARDAR EN BBDD
    const storedAlbumImg = await Album.findOneAndUpdate(
      { _id: albumId },
      { image: req.file.filename },
      { new: true }
    );
    if (!storedAlbumImg) {
      return res.status(404).json({
        status: "error",
        message: "Cant upload the image",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Image artist uploaded with success!!",
      artist: storedAlbumImg,
      file: req.file,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getAlbumImg = async (req, res) => {
  try {
    //SACAR PARÁMETRO URL
    const fileImg = await req.params.file;
    //RUTA IMAGEN
    const filePath = "./uploads/album/" + req.params.file;
    //COMPROBAR SI EXISTE EL ARCHIVO
    fs.stat(filePath, () => {
      if (!fileImg) {
        return res.status(404).json({
          status: "error",
          message: "Cant find the album image",
        });
      }
      //DEVOLVER FILE
      return res.sendFile(path.resolve(filePath));
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
  getOneAlbum,
  getAllArtistAlbums,
  updateAlbum,
  uploadAlbumImg,
  getAlbumImg,
};
