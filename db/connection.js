// IMPORTAR MONGOOSE
const mongoose = require("mongoose"); 
// MÉTODO CONEXIÓN ASÍNCRONO 
const connection = async () => {
try{
    await mongoose.connect("mongodb://localhost:27017/api_music");
    // throw new Message("Welcome to Cyberia and enjoy our spotify clone");
    console.log("Welcome to Cyberia with Mongoose! Enjoy the code!"); 
}catch(error){
    console.error(error)
    throw new Error("Cant connect with the DataBase!!!")
}
}

module.exports = connection
