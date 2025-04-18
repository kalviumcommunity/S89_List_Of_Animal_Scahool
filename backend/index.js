const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("MONGO_URI is not set. Please check your environment variables.");
}

const app = express();
const routes = require("./routes");
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong!");
});

app.use("/animal-school", routes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(8080, () => {
            console.log("Server is running on port 8080");
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });
