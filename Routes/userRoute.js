const express = require("express")
const validator = require('validator')
const userModel = require("../Models/UserModel")
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

// login user
userRouter.post("/login", async (req, res)=>{

    const {email,password} = req.body;
   
    try { 
        const isEmaiExist = await userModel.findOne({email})

        if(!isEmaiExist){
            return res.json({success:false, message:"User doesn't exists, enter correct email"})
            }
            
        const isPassExist = await userModel.findOne({password})

        if(!isPassExist){
            return res.json({success:false, message:"please enter correct password"})
        }
        
        if(isEmaiExist && isPassExist){
            console.log("login success");
            const token = createToken(isEmaiExist._id)
            return res.json({success:true,token, message:"login success"})
        }
    } 
    catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"});
    }
})


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Register user
userRouter.post("/register", async (req, res)=>{
    
    const {name, password, email} = req.body;

    try {
   
            const data={
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }

            const existingUser = await userModel.findOne({email: data.email})
            
                if (existingUser){
                return res.json({success:false, message:"User already exists, please choose a different email"})
                }

                if(!existingUser){
                    if (!validator.isEmail(data.email)) {
                            return res.json({success:false, message:"Please enter valid email"})
                    }
                    else if(password.length < 8) {
                            return res.json({success:false, message:"Passwod should be atleast 8 characters"})
                    }
                    else{  
                        const userdata = await userModel.insertMany(data)
                        const token = createToken(userdata._id)
                        return res.json({success:true, message:"Sign up successful",token})

                    }
                }

    } 
    catch (error) {
            console.log(error);
            return res.json({success:false,message:"Error"});
    }
})







module.exports = userRouter