const mongoose = require("mongoose");


const ordeSchema = new mongoose.Schema({
    userId:{type:String},
    items:{type:Array, required:true},
    amount:{type:Number, required:true},
    address:{type:Object, required:true},
    status:{type:String, default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:false},

})


const orderModel = mongoose.models.order || mongoose.model('order', ordeSchema)

module.exports = orderModel;