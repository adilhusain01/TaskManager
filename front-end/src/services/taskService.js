// taskService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/tasks';

const taskService = {
  getTasks: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tasks:', error);
    }
  },

  addTask: async (taskText) => {
    try {
      const response = await axios.post(BASE_URL, { task: taskText });
      return response.data;
    } catch (error) {
      throw new Error('Error adding task:', error);
    }
  },

  deleteTask: async (taskId) => {
    try {
      await axios.delete(`${BASE_URL}/${taskId}`);
    } catch (error) {
      throw new Error('Error deleting task:', error);
    }
  },

  updateTask: async (taskId, newTask) => {
    try {
      await axios.put(`${BASE_URL}/${taskId}`, { task: newTask });
    } catch (error) {
      throw new Error('Error updating task:', error);
    }
  }
};

export default taskService;
