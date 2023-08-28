const { validationResult } = require("express-validator");

const usuarioValidar=(req,res,next)=>{
    const errores=validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json(errores);
    };
    next();
};

module.exports={
    usuarioValidar
}