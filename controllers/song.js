const Song = require("../models/song");
const mongoosePagination = require("mongoose-pagination");
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

module.exports = {
  prueba,
  saveSong,
  getSong,
  getAllSongsAlbum,
};
