const Song = require("../models/song");
const mongoosePagination = require("mongoose-pagination");
const fs = require("fs"); 
const path = require("path"); 

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
    song.file = null;
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

const getSong = async (req, res) => {
  try {
    let songId = req.params.id;

    const getTheSong = await Song.findById(songId).populate("album");

    if (!songId || !getTheSong) {
      return res.status(404).json({
        status: "error",
        message: "Cant find the song",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Here is your song",
      song: getTheSong,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getAllSongsAlbum = async (req, res) => {
  try {
    let albumId = req.params.id;

    let page = 1;

    if (req.params.id) page = req.params.page;

    const itemsPerPage = 10;

    const songsAlbum = await Song.find({ album: albumId })
      .sort({ created_at: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .populate();

    if (!songsAlbum) {
      return res.status(404).json({
        status: "error",
        message: "Cant find the album songs",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Album songs list",
      page,
      songsAlbum,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateSong = async (req, res) => {
  try {
    let songId = req.params.id;

    let updateDataSong = req.body;

    const updateThisSong = await Song.findByIdAndUpdate(
      songId,
      updateDataSong,
      { new: true }
    );

    if (!updateThisSong) {
      return res.status(404).json({
        status: "error",
        message: "Cant update the Song",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Song updated!!",
      song: updateThisSong,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const deleteSong = async (req, res) => {
  try {
    let songId = req.params.id;

    const song = await Song.findById(songId);

    if (!song) {
      return res.status(404).json({
        status: "error",
        message: "Cant find the song",
      });
    }
    const deleteSong = await Song.findByIdAndDelete(song);

    if (!deleteSong) {
      return res.status(400).json({
        status: "error",
        message: "Unable to delete the song",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Song deleted!",
      songDeleted: song,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const uploadSongToAlbum = async (req, res) => {
  try {
    const songId = req.params.id; // ID DEL ALBUM AL QUE VAMOS AÑADIR LA IMG
    if (!req.file) {
      return res.status(404).json({
        status: "error",
        message: "Please add a Song",
      });
    }
    //CONSEGUIR NOMBRE DEL ARCHIVO
    let song = req.file.originalname;
    //EXTENSIÓN ARCHIVO
    const songSplit = song.split(".");
    const extension = songSplit[1];
    //COMPROBAR EXTENSIÓN
    if (extension !== "mp3" && extension !== "ogg") {
      //EN CASO DE EXTENSIÓN INCORRECTA BORRAMOS LA IMAGEN
      const filePath = req.file.path;
      const fileDeleted = fs.unlinkSync(filePath);
      return res.status(400).json({
        status: "error",
        message: "Invalid extension file",
      });
    }

    //SI ES CORRECTO GUARDAR EN BBDD
    const storedSong = await Song.findOneAndUpdate(
      { _id: songId },
      { file: req.file.filename },
      { new: true }
    );
    console.log("REQ.FILE =>",req.file)
    if (!storedSong) {
      return res.status(404).json({
        status: "error",
        message: "Cant upload the song",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Song audio archive uploaded with success!!",
      artist: storedSong,
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

const getTheSongForListen = async (req, res) => {
  try {
  } catch {}
};
module.exports = {
  prueba,
  saveSong,
  getSong,
  getAllSongsAlbum,
  updateSong,
  deleteSong,
  uploadSongToAlbum,
  getTheSongForListen,
};
