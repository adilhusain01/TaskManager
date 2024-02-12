const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require(("./src/routes/taskRoutes"));

const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT || 8000;

const app = express();

//takes req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allow all HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
  })
);


mongoose.connect(`${process.env.MONGO_CONNECTION}`).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log("Error connecting to mongoDB", err);
})

app.use('/api/tasks', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = app;