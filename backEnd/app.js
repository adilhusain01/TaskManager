const express = require("express");
const mongoose = require("mongoose");
const router = require(("./src/routes/taskRoutes"));

const app = express();

//takes req.body
app.use(express.json());

mongoose.connect("mongodb+srv://adil:Nigar01@cluster0.hgsaitb.mongodb.net/").then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log("Error connecting to mongoDB", err);
})

app.use('/tasks', router);

app.listen(8000, () => {
    console.log('Server running on port 8000');
})