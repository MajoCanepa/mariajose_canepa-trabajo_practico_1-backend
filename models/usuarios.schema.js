const {body, checkSchema} = require('express-validator');

const validaciones=[
body('correo').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email debe ser valido'),
body('password').notEmpty().withMessage('El password es obligatorio').isLength({min:4}).withMessage('El password debe tener al menos 4 caracteres'),
body('usuario').notEmpty().withMessage('El nombre es obligatorio').isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres.')
];

const validaciones2 = checkSchema({
    correo:{
        notEmpty:{
            errorMessage:'El correo es obligatorio'
        },
        isEmail:{
            errorMessage:'El correo debe ser válido'
        }
    },
    password:{
        notEmpty:{
            errorMessage:'El password es obligatorio'
        },
        isLength:{
            errorMessage:'El password debe tener al menos 6 carácteres',
            options:{min:6}
        }
    },
    user:{
        notEmpty:{
            errorMessage:"El usuario  es obligatorio"
        },
        isLength:{
            errorMessage:"El nombre debe tener al menos 6 carácteres.",
            options:{min:6}
        }
    }
})

module.exports = {
    validaciones2  
}