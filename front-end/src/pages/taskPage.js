// TaskPage.js
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import TaskList from '../components/taskList';
import TaskForm from '../components/taskForm';
import taskService from '../services/taskService';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    taskService.getTasks()
      .then(tasks => setTasks(tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTask = (taskText) => {
    // Add new task to the backend
    taskService.addTask(taskText)
      .then(newTask => {
        setTasks([...tasks, newTask]);
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const handleDeleteTask = (taskId) => {
    // Delete task from the backend
    taskService.deleteTask(taskId)
      .then(() => {
        // Remove the deleted task from the tasks list
        setTasks(tasks.filter(task => task._id !== taskId));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleUpdateTask = (taskId, newTask) => {
    // Update task in the backend
    taskService.updateTask(taskId, newTask)
      .then(() => {
        // Update the task in the tasks list
        setTasks(tasks.map(task => {
          if (task._id === taskId) {
            return { ...task, task: newTask };
          }
          return task;
        }));
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div id="main">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
    </div>
  );
};

export default TaskPage;
