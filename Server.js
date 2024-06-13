const express = require("express")
const cors = require('cors')
const connectDB = require("./Config/db")
const foodRouter = require("./Routes/foodRoute")
const userRouter = require("./Routes/userRoute")
const env = require('dotenv/config')
const orderRouter = require("./Routes/orderRoute")
const path = require('path')


// app config
const app = express()
const port = 4000

//  static files


app.get('/', (req,res)=>{
    app.use(express.static(path.resolve(__dirname, "frontend", "build")))
    res.sendFile(path.resolve(__dirname, "frontend", "build","index.html"))
})

// middleware
app.use(express.json())
app.use(cors())

// Db connection
connectDB

// api endpoints
app.use('/api/food', foodRouter)
app.use("/images", express.static('Uploads'))

// user Authentication
app.use("/api/user", userRouter)

// Cart Route
// app.use("/api/cart", cartRouter)

// order route
app.use('/api/order', orderRouter)

app.get('/', (req,res)=>{
    res.send("API working")
})



app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})