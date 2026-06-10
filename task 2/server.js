const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/minicrm")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    source: String,
    status: {
        type: String,
        default: "New"
    },
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Lead = mongoose.model("Lead", leadSchema);

// Create Lead
app.post("/api/leads", async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.json(lead);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get All Leads
app.get("/api/leads", async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Lead
app.put("/api/leads/:id", async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(lead);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Lead
app.delete("/api/leads/:id", async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.params.id);
        res.json({ message: "Lead Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});