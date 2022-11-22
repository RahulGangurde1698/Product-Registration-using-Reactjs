
const express = require('express');
const router = express.Router();

require('../database/db');
const User = require ("../Model/Scema");

router.post('/register', async (req, res) => {
    res.json({message: req.body});
    console.log(req.body);
    const { id, name,category, product, price, brand } = req.body;

    if (!id || !name || !category || !product || !price || !brand) {
        return res.status(422).json({ error: "Please fill the field Properly" });
    }

    try{

       const productexist = await User.findOne({ name:name })


       if (productexist) {
        return res.status(422).json({ error: "Name is already exist Please try another" });
    }
    const user = new User({ id, name, category, product, price, brand });

          await  user.save(); 

    
              res.status(201).json({ message: "user register succesfully" });


    }catch (err){
        console.log(err); 
    }
});

router.get('/register',(req,res)=>{
    User.find()
       .then(founddetail=> res.json(founddetail));
})






module.exports = router;