import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
};

export default TaskList;
