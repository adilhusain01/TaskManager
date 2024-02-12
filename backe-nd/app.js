const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require(("./src/routes/taskRoutes"));

const dotenv = require("dotenv")
dotenv.config()

const app = express();

//takes req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from this origin
    methods: ["POST", "PUT", "PATCH", "GET", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: [
      "Origin",
      "X-Api-Key",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ], // Allowed headers
  })
);

mongoose.connect(`${process.env.MONGO_CONNECTION}`).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log("Error connecting to mongoDB", err);
})

app.use('/api/tasks', router);

app.listen(8000, () => {
    console.log('Server running on port 8000');
})

module.exports = app;