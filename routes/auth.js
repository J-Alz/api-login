const { route } = require('express/lib/application');
const User = require('../models/user')

//Nos permite crear rutas
const router = require('express').Router();

//creamos una ruta de tipo POST
router.post('/register',async (req,res)=>{
    //creamos el objeto usando el modelo user
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    //usamos .save() del model para almacenar los datos
    try{
        const savedUser = await user.save()
        res.json({
            error:null,
            data:savedUser
        })
    }catch(error){
        res.status(400).json({error})
    }
})

module.exports = router