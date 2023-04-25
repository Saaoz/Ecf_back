const dotenv = require("dotenv");
dotenv.config();

const router = require("./routes/Index_route")
const express = require("express");
const PORT = 8000;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(bodyParser.json());
app.use(router);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Route par défaut
app.get("/", (req, res) => {
	res.send("Welcome to jobboard API");
});

// Importer les routes pour chaque modèle
const jobRoutes = require("./routes/Card_route");

// Utiliser les routes pour chaque modèle
app.use("/jobs", jobRoutes);


app.listen(PORT, async () => {
	console.log(`server up on port ${PORT}`);
});