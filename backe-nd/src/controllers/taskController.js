const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

const getTaskByID = async (req, res) => {
    try {
        const thatTask = await Task.findById(req.params.id);
        if(!thatTask){
            return res.status(404).json({message: `Can't find task with ID ${req.params.id}`});
        }    

        res.status(200).json(thatTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}

const createTask = async (req, res) => {
    try {
        const task = new Task({
            task: req.body.task
        })
    
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!task){
            return res.status(404).json({message: `Can't find task with ID ${req.params.id}`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({message: `Can't find task with ID ${req.params.id}`});
        }
        res.status(200).json();
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {getTasks, getTaskByID, createTask, updateTask, deleteTask};