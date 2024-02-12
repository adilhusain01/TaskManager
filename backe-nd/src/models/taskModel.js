const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    timeStamp:{
        type: Date,
        default : Date.now,
        required: true
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;