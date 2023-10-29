import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleStatus, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      onEdit(editText);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <li className='todo-item'>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleInputChange} />
          <button onClick={handleSaveEdit} className='save-button'>Save</button>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'completed' : ''}
            onClick={onToggleStatus}
          >
            {todo.text}
          </span>
          <button onClick={handleToggleEdit} className='edit-button'>Edit</button>
          <button onClick={onDelete} className='delete-button'>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
