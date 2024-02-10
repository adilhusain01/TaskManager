import React from 'react';

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
      <button onClick={() => onDelete(task._id)}>Delete</button>
      <button onClick={handleUpdateClick}>Update</button>
    </li>
  );
};

export default TaskItem;
