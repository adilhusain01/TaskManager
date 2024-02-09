const { tasks } = require("../public/tasks");

const getTasks = (req, res) => {
    res.status(200).json(tasks);
}

const getTaskByID = (req, res) => {
    const { id } = req.params;

    const thatTask = tasks.find((task) => task.id === Number(id));
    if(!thatTask){
        return res.status(404).json({success:false, msg:`Can't find task with ID ${id}`});
    }    

    res.status(200).json({success:true, data:thatTask});
}

const createTask = (req, res) => {
    const { task } = req.body;
    res.status(201).json({success:true, data:[...tasks, task]})
}

const updateTask = (req, res) => {
    const { task } = req.body;
    const { id } = req.params;

    const thatTask = tasks.find((task) => task.id === Number(id));
    if(!thatTask){
        return res.status(404).json({success:false, msg:`Can't find task with ID ${id}`});
    }

    const updatedTasks = tasks.map((singleTask) => {
        if(singleTask.id === Number(id)){
            singleTask.task = task;
        }

        return singleTask;
    })

    res.status(200).json({success:true, data:updatedTasks});
}

const deleteTask = (req, res) => {
    const { id } = req.params;

    const thatTask = tasks.find((task) => task.id === Number(id));
    if(!thatTask){
        return res.status(404).json({success:false, msg:`Can't find task with ID ${id}`});
    }

    const remainingTasks = tasks.filter((task) => task.id !== Number(id));

    res.status(200).json({success:true, data:remainingTasks});
}

module.exports = {getTasks, getTaskByID, createTask, updateTask, deleteTask};