const dns = require("node:dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend is running successfully!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});