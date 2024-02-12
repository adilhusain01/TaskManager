const express = require("express");
const {getTasks, getTaskByID, createTask, updateTask, deleteTask} = require("../controllers/taskController");

const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getTaskByID);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;