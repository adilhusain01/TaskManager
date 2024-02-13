import React from 'react';
import '../styles/styles.css';


const TaskItem = ({ task, onDelete, onUpdate }) => {
  const handleUpdateClick = () => {
    const newTask = prompt('Enter new task:', task.task);
    if (newTask !== null && newTask.trim() !== '') {
      onUpdate(task._id, newTask);
    }
  };

  return (
    <li>
      {task.task}
      <button class="itemBtn" onClick={() => onDelete(task._id)}>Delete</button>
      <button class="itemBtn" onClick={handleUpdateClick}>Update</button>
    </li>
  );
};

export default TaskItem;
