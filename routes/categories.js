const router = require("express").Router();
const Categories = require("../models/Category")


router.post("/", async (req , res)=> {
    const newCat = new Categories(req.body);
     try {
         const saveCat = await newCat.save();
          res.status(200).json(saveCat);

     } catch(err){
         res.status(500).json(err);

     }
})


module.exports = router;