// const express = require('express');
// const userModel = require("../Models/UserModel")
// const authMiddleWare = require("../Middlewares/Auth");


// const cartRouter = express.Router()

// cartRouter.post('/add', authMiddleWare , async (req,res) =>{
//     try {
//         let userData = await userModel.findOne({_id:req.body.isEmaiExistId})
//         cartData = await userData.cartData;
        
//              if(!cart[req.body.itemId])
//             {
//                 cartData[req.body.itemId] = 1
//             }
//             else{
//                 cartData[req.body.itemId] += 1
//             }
//             await userModel.findByIdAndUpdate(req.body.isEmaiExistId,{cartData})
//             res.json({success:true, message:"Added to cart"})
//     }
//      catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// } )


// // Remove items from user cart
// cartRouter.post('/remove', authMiddleWare, async (req,res)=>{

// })


// // fetchUser cart data

// cartRouter.post('/get',authMiddleWare, async (req,res)=>{
    
// })



// module.exports = cartRouter;
