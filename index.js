const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const app = express();

app.get("/ping",(req,res)=>{
    resizeBy.send("pong!");
})

app.listen(8080,async()=>{
    try {
        
        console.log("Server connected sucessfully");
    } catch (error) {
        console.log(error)
    }
})