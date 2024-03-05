const jwt = require("jwt-simple"); 
const moment = require("moment"); 
const libjwt = require("../services/authService");
const secret = libjwt.secret; 

const auth = (req,res,next) => {
    if(!req.headers.authorization) {
        return res.status(403).json({
            status: "error",
            message: "Missing Token",
        }); 
    };

    let token = req.headers.authorization.replace(/^(Bearer\s*)|(['"])+/g, "");
    console.log("TOKEN =>", token); 
    try{
        let payload = jwt.decode(token,secret); 
        if(payload.exp <= moment().unix()){
            return res.status(401).json({
                status:"error",
                message: "Expired Token",
            }); 
        };
        //AGREGAR DATOS DE USUARIO A REQUEST
            req.authorization = payload;
    } catch (error) {
        console.error("Error decoding token:",error);
        return res.status(404).json({
            status: "error",
            message: "Invalid Token",
        });
    };
    next();
};

module.exports = {
    auth,
}