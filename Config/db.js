const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Food-Delivery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectDB = mongoose.connection;

connectDB.once('open', ()=>{
    console.log("Database connected")
})

module.exports = connectDB