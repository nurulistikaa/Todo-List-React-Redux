import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoStatus, editTodo } from '../store/actions';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (visibilityFilter === 'SHOW_ACTIVE') {
      return !todo.completed;
    }
    if (visibilityFilter === 'SHOW_COMPLETED') {
      return todo.completed;
    }
    return true;
  });

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <ul className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          onToggleStatus={() => handleToggleStatus(todo.id)}
          onEdit={(newText) => handleEdit(todo.id, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
