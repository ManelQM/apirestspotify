const Artist = require("../models/artist");
const mongoosePagination = require("mongoose-pagination");

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

const getAllArtist = async (req, res) => {
    try{
    //COMIENZO PAGINACIÓN
        let page = 1; 
        if(req.params.page) {
            page = req.params.page; 
        }
        page = parseInt(page);
        //MONGOOSE PAGINATION
        let itemsPerPage = 5; 
        const findArtist = await Artist.find().sort("_id").paginate(page,itemsPerPage);
        if (!findArtist || !page) {
            return res.status(400).json({
                status: "error",
                message: "Cant find Artist List :(",
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Artist List",
            artist: findArtist,
            page,
            itemsPerPage,
            pages: Math.ceil(Artist/itemsPerPage),
        })
    }catch(error){
        console.error(error);
        return res.status(400).json({
            status: "error",
            message: "INTERNAL SERVER ERROR",
        });
    }
};

const updateArtist = async (req, res) => {
    try{
        let artistId = req.params.id; 
        let updateDataArtist = req.body

        const updateThisArtist = await Artist.findByIdAndUpdate(artistId,updateDataArtist , {new: true}); // NEW:TRUE ES PARA DEVOLVER EL OBJETO ACTUALIZADO
        if(!updateThisArtist) {
            return res.status(500).json({
                status: "error",
                message: "Cant update the Artist"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "Artist updated !!",
            artist: updateThisArtist,
        })
    }catch(error){
        console.error(error);
        return res.status(400).json({
            status: "error",
            message: "INTERNAL SERVER ERROR",
        })
    }
}

module.exports = {
  prueba,
  saveArtist,
  getArtist,
  getAllArtist,
  updateArtist,
};
