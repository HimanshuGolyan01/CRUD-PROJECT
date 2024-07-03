const express = require("express")
const color = require("color")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const app = express()
dotenv.config()

const connectdb =  async () => { 
  //  mongoose.connect(process.env.MONGO_URI)
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
connectdb();

app.get('/',(req,res) => {
    console.log("this is get request")
})


app.listen(process.env.PORT,() => {
    console.log(`server is running at ${process.env.PORT}`)

})