const Artist = require("../models/artist");
const Album = require("../models/album");
const Song = require("../models/song");
const mongoosePagination = require("mongoose-pagination");
const fs = require("fs");
const path = require("path");


const createArtist = async (req, res) => {
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
  } catch (error) {
    console.error("Message ERROR", error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getArtist = async (req, res) => {
  try {
    const artistId = req.params.id;
    const getOneArtist = await Artist.findById(artistId);

    if (!artistId || !getOneArtist) {
      return res.status(400).json({
        status: "error",
        message: "Cant find the artis :(",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Here is your artist ",
      artist: getOneArtist,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getAllArtist = async (req, res) => {
  try {
    //COMIENZO PAGINACIÓN
    let page = 1;
    if (req.params.page) {
      page = req.params.page;
    }
    page = parseInt(page);
    //MONGOOSE PAGINATION
    let itemsPerPage = 5;
    const findArtist = await Artist.find()
      .sort("_id")
      .paginate(page, itemsPerPage);
    if (!findArtist || !page) {
      return res.status(400).json({
        status: "error",
        message: "Cant find Artist List :(",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Artist List",
      artist: findArtist,
      page,
      itemsPerPage,
      pages: Math.ceil(Artist / itemsPerPage),
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateArtist = async (req, res) => {
  try {
    // RECOGEMOS ID ARTISTA POR PARAMS
    let artistId = req.params.id;
    // DATOS A ACTUALIZAR
    let updateDataArtist = req.body;
    //BUSCAMOS ARTISTA EN BD
    const updateThisArtist = await Artist.findByIdAndUpdate(
      artistId,
      updateDataArtist,
      { new: true }
    ); // NEW:TRUE ES PARA DEVOLVER EL OBJETO ACTUALIZADO

    if (!updateThisArtist) {
      return res.status(404).json({
        status: "error",
        message: "Cant update the Artist",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Artist updated !!",
      artist: updateThisArtist,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const deleteArtist = async (req, res) => {
  try {
    let artistId = req.params.id;
    const artist = await Artist.findById(artistId);

    if (!artist) {
      return res.status(400).json({
        status: "error",
        message: "Cant find the artist",
      });
    }

    const deleteThisArtist = await Artist.findByIdAndDelete(artistId);
    const removeAlbum = await Album.find({ artist: artistId });

    for (let album of removeAlbum) {
      await Song.deleteMany({ album: album._id });
      await album.deleteOne();
    }

    if (!deleteThisArtist) {
      return res.status(400).json({
        status: "error",
        message: "Unable to remove the Artist",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Artist removed",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const uploadArtistImg = async (req, res) => {
  try {
    const artistId = req.params.id; // ID DEL ARTISTA AL QUE VAMOS AÑADIR LA IMG
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
    const storedArtitstImg = await Artist.findOneAndUpdate(
      { _id: artistId },
      { image: req.file.filename },
      { new: true }
    );
    if (!storedArtitstImg) {
      return res.status(404).json({
        status: "error",
        message: "Cant upload the image",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Image artist uploaded with success!!",
      artist: storedArtitstImg,
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

const getArtistImg = async (req, res) => {
  try {
    //SACAR PARÁMETRO URL
    const fileImg = await req.params.file;
    //RUTA IMAGEN
    const filePath = "./uploads/artistImage/" + req.params.file;
    //COMPROBAR SI EXISTE EL ARCHIVO
    fs.stat(filePath, () => {
      if (!fileImg) {
        return res.status(404).json({
          status: "error",
          message: "Cant find the artist image",
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
  createArtist,
  getArtist,
  getAllArtist,
  updateArtist,
  deleteArtist,
  uploadArtistImg,
  getArtistImg,
};
