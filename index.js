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

// SERVIDOR DE NODE ESCUCHANDO EN EL PUERTO
app.listen(port,()=> {
    console.log("NODE SERVER PORT => ", port)
})
//EEJECUTAR CONEXIÓN A BD   
connection();