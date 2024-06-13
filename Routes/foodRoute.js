const express = require("express")
const multer = require('multer')
const fs = require('fs')
const foodModel = require("../Models/foodModels");

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})


// add food items

foodRouter.post('/add', upload.single("image") , async (req, res) =>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
)


// All food list

foodRouter.get('/list', async (req, res) =>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
})


// Remove food item

foodRouter.post('/remove', async (req, res) =>{
    try{
        
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`Uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({sucess:true,message:"Food Removed"})
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
})


module.exports = foodRouter