const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const user = require("./userSchema");

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("MONGO_URI is not set. Please check your environment variables.");
}

const app = express();
app.use(cookieParser());
const routes = require("./routes");
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong!");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await user.findOne({email, password});
        if (!userData) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.cookie("user", userData.email, {
            httpOnly: true,
            sameSite: "none",
        });
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


app.get("/logout", (req, res) => {
    res.clearCookie("user", {
        httpOnly: true,
        sameSite: "none",
    });
    return res.status(200).json({ message: "Logout successful" });
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newUser = new user({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
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
