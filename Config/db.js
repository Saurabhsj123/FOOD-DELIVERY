const mongoose = require('mongoose')
const env = require('dotenv/config')

mongoose.connect(process.env.DATABASE_URL)

const connectDB = mongoose.connection;

connectDB.once('open', ()=>{
    console.log("Database connected")
})

module.exports = connectDB