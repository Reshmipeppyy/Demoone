import React, { useState } from 'react';

const TaskItem = ({ task, onDeleteTask, onToggleTaskStatus, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSaveEdit = () => {
    onEditTask(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => onToggleTaskStatus(task.id, task.completed)}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;