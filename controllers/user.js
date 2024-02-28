const validate = require("../helpers/validate");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// RUTA PRUEBA
const prueba = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      message: "Ruta prueba user",
    });
  } catch {
    return res.status(400).json({
      status: "error",
      message: "INERNAL SERVER ERROR",
    });
  }
};

//REGISTER CONTROLLER

const register = async (req, res) => {
  try {
    //Recoger datos de la petición
    const params = req.body;
    //Comprobar que los campos requeridos han sido complimentados
    if (!params.name || !params.nick || !params.password || !params.email) {
      return res.status(400).json({
        status: "error",
        message: "Please complete required fields",
      });
    }
    //Validar los datos
    validate(params);
    if (!validate) {
      return res.status.json({
        status: "error",
        message: "Validate Register Error",
      });
    }
    //Control usuarios duplicados
    const duplicatedUsers = await User.find({
      $or: [
        { email: params.email.toLowerCase() },
        { nick: params.nick.toLowerCase() },
      ],
    });
    if (duplicatedUsers && duplicatedUsers.length >= 1) {
      return res.status(400).json({
        status: "error",
        message: "User exists",
      });
    }
    //Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;
    //Crear objeto del usuario
    const newUser = new User(params);
    //Guardar usuario en la BD
    const userStored = await newUser.save();
    if (!userStored) {
      return res.status(500).json({
        status: "error",
        message: "Error trying to register user",
      });
    }

    //Limpiar el objeto a devolver

    //Devolver el resultado
    return res.status(200).json({
      status: "success",
      message: "User registered, welcome to Spotify Clone",
      newUser: userStored,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
    try{
        let params = req.body; 
        if (!params.email || !params.password) {
            return res.status(400).json({
                status: "error",
                message: "Please complete the required fields",
            });
        }
        const users = await User.findOne({email: params.email})
    }catch{}
}

module.exports = {
  prueba,
  register,
  login,
};
