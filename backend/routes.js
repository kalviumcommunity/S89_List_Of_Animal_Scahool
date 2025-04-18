const express = require("express");
const AnimalSchool = require("./schema"); 
const router = express.Router();
const mongoose = require("mongoose");






router.get("/", async (req, res) => {
    try {
        const schools = await AnimalSchool.find();
        return res.status(200).json(schools);
    } catch (error) {
        console.error("Error fetching animal schools:", error);
        return res.status(500).send({ message: "Failed to fetch animal schools" });
    }
});


router.post("/", async (req, res) => {
    try {
        const { name, location, animals } = req.body;

        if (!name || !location) {
            return res.status(400).send({ message: "Name and location are required" });
        }

        const newSchool = new AnimalSchool({ name, location, animals });
        await newSchool.save();
        return res.status(201).json({ message: "Animal school created successfully", school: newSchool });
    } catch (error) {
        console.error("Error creating animal school:", error);
        return res.status(500).send({ message: "Failed to create animal school" });
    }
});


router.put("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ message: "Invalid school ID" });
        }

        const updatedSchool = await AnimalSchool.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedSchool) {
            return res.status(404).send({ message: "Animal school not found" });
        }
        return res.status(200).json({ message: "Animal school updated successfully", school: updatedSchool });
    } catch (error) {
        console.error("Error updating animal school:", error);
        return res.status(500).send({ message: "Failed to update animal school" });
    }
});






router.delete("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ message: "Invalid school ID" });
        }

        const deletedSchool = await AnimalSchool.findByIdAndDelete(req.params.id);
        if (!deletedSchool) {
            return res.status(404).send({ message: "Animal school not found" });
        }
        return res.status(200).json({ message: "Animal school deleted successfully" });
    } catch (error) {
        console.error("Error deleting animal school:", error);
        return res.status(500).send({ message: "Failed to delete animal school" });
    }
});

module.exports = router;
