const validate = require("../helpers/validate"); 
const User = require("../models/user"); 

// RUTA PRUEBA
const prueba = async (req,res) => {

    try{
        return res.status(200).json({
            status: "success",
            message: "Ruta prueba user",
        });
    }catch{
        return res.status(400).json({
            status: "error",
            message: "INERNAL SERVER ERROR",
        });
    };
};

//REGISTER CONTROLLER

const register = async (req,res) => {
 
    try{
    //Recoger datos de la petición
        let params = req.body; 
    //Comprobar que los campos requeridos han sido complimentados
        if(!params.name || !params.nick || !params.password || !params.email) {
            return res.status(400).json({
                status: "error",
                message: "Please complete required fields"
            });
        };
    //Validar los datos
        validate(params); 
      if(!validate) {
        return res.status.json({
            status: "error",
            message: "Validate Register Error"
        })
      }  
    //Control usuarios duplicados
      const duplicatedUsers = await User.find({
        $or: [
            {email: params.email.toLowerCase()},
            {nick: params.nick.toLowerCase()}
        ]
      }).exec()
    //Cifrar la contraseña

    //Crear objeto del usuario

    //Guardar usuario en la BD

    //Limpiar el objeto a devolver

    //Devolver el resultado

    }catch {

    }

}

module.exports = {
    prueba,
    register,
}