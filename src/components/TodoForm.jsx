import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        className='todo-input'
        type="text"
        placeholder="What to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className='todo-button'>Add</button>
    </form>
  );
}

export default TodoForm;
