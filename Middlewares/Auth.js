const jwt = require('jsonwebtoken')

const authMiddleWare = async (req,res, next) =>{

    const {token} =req.headers;
    if(!token){
        return res.json({success:false, message:"Not Authorized login again"})
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.isEmaiExistId = token_decode.id;
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"ERROR"})
    }
}


exports.module = authMiddleWare