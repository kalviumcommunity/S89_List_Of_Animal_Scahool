const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();

const routes = require("./routes");

app.use(express.json());

app.get("/ping",(req,res)=>{
    res.send("pong!");
})

app.use("/animal-school",routes);

app.listen(8080,async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Server connected sucessfully");
    } catch (error) {
        console.log(error)
    }
})