const validator = require("validator"); 

const validate = (params) => {
    let name = !validator.isEmpty(params.name) &&
                validator.isLength(params.name, {min:3, max:30}) &&
                validator.isAlpha(params.name.replace(/ /g, ""), "es-ES");
    
    let nick = !validator.isEmpty(params.nick) &&
                validator.isLength(params.nick, {min:2, max: 30});
    
    let email = !validator.isEmpty(params.email) &&
                 validator.isEmail(params.email, {min:3, max: 30}); 
    
    let password = !validator.isEmpty(params.password) 
}