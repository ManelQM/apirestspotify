//IMPORTAR CONEXION A BASE DE DATOS 
const connection = require("./db/connection");
// DEPENDENCIAS 
const express = require("express");
const cors = require("cors"); 
// MENSAJE BIENVENIDA
console.log("WELCOME TO API REST SPOTIFY CLONE - SPONSORED BY NODE")
//CREAR SERVIDOR NODE
const app = express(); 
const port = 3667;
//CORS CONFIG
app.use(cors());
//CONVERTIR LOS DATOS DEL BODY A OBJETOS JS
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// DEFINICIÓN RUTAS PETICIONES MODELOS
const UserRoutes = require("./routes/user"); 
const ArtistRoutes = require("./routes/artist"); 
const AlbumRoutes = require("./routes/album"); 
const SongRoutes = require("./routes/song"); 

app.use("/appmusic/user",UserRoutes); 
app.use("/appmusic/artist",ArtistRoutes); 
app.use("/appmusic/album",AlbumRoutes); 
app.use("/appmusic/song",SongRoutes);    

//RUTA DE PRUEBA
app.get("/test", (req, res) => {
    return res.status(200).send( ({
        id:111,
        name: "Satan", 
        surname: "Hola",
        message: "ESE CÓDIGO QUE NO DECAIGA"
    }))
})

// SERVIDOR DE NODE ESCUCHANDO EN EL PUERTO
app.listen(port,()=> {
    console.log("NODE SERVER PORT => ", port)
})
//EJECUTAR CONEXIÓN A BD   
connection();