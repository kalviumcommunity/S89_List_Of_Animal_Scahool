const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const app = express();

app.get("/ping",(req,res)=>{
    res.send("pong!");
})

app.listen(8080,async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server connected sucessfully");
    } catch (error) {
        console.log(error)
    }
})