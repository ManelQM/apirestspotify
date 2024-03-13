const Album = require("../models/album");

// RUTA PRUEBA
const prueba = async (req,res) => {

    try{
        return res.status(200).json({
            status: "success",
            message: "Ruta prueba album",
        });
    }catch{
        return res.status(400).json({
            status: "error",
            message: "INERNAL SERVER ERROR",
        });
    };
};

const createAlbum = async (req, res) => {
    try{

    }catch{

    }
}; 

module.exports = {
    prueba,
    createAlbum,
}