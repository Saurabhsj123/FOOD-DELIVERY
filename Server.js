const express = require("express")
const cors = require('cors')
const connectDB = require("./Config/db")
const foodRouter = require("./Routes/foodRoute")
const userRouter = require("./Routes/UserRoute")
const env = require('dotenv/config')
const orderRouter = require("./Routes/orderRoute")
// const cartRouter = require("./Routes/CartRoute")

// import userRouter from ""

// app config
const app = express()
const port = 4000

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