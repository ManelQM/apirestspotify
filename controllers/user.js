const validate = require("../helpers/validate");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../services/authService");

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

    //TODO: Limpiar el objeto a devolver

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
  try {
    let params = req.body;
    if (!params.email || !params.password) {
      return res.status(400).json({
        status: "error",
        message: "Please complete the required fields",
      });
    }
    //BUSCAR EN LA BD SI EL USUARIO EXISTE
    const users = await User.findOne({ email: params.email });
    if (!users) {
      return res.status(404).json({
        status: "error",
        message: "Email or password invalid",
      });
    }
    console.log("CONST USERS =>", users);
    //CRIPTAR PASSWORD
    const userPassword = bcrypt.compareSync(params.password, users.password);
    if (!userPassword) {
      return res.status(400).json({
        status: "error",
        message: "Bad password",
      });
    }
    //INSERTAR TOKEN
    const token = jwt.createToken(users);
    return res.status(200).json({
      status: "success",
      message: "You are logged, enjoy!",
      users,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    //OBTENER PARÁMETRO
    const id = req.params.id;
    //CONSULTA BD PARA OBTENER PERFIL USUARIO
    const profile = await User.findById(id);
    if (!profile || !id) {
      return res.status(400).json({
        status: "error",
        message: "Who are you?, cant find user",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "This is your profile",
      user: profile,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "error",
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateUserProfile = async (req, res) => {
  try{

  } catch (error){

  }
}
module.exports = {
  prueba,
  register,
  login,
  getProfile,
  updateUserProfile,
};
