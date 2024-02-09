const express = require("express");
const router = require(("./routes/taskRoutes"));

const app = express();

//takes req.body
app.use(express.json());

app.use('/tasks', router);

app.listen(8000, (req, res) => {
    console.log('Server running on port 8000');
})