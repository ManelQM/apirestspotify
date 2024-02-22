// RUTA PRUEBA
const prueba = async (req,res) => {

    try{
        return res.status(200).json({
            status: "success",
            message: "Ruta prueba song",
        });
    }catch{
        return res.status(400).json({
            status: "error",
            message: "INERNAL SERVER ERROR",
        });
    };
};

module.exports = {
    prueba
}