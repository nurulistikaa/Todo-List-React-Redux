import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStatusFilter from './components/TodoStatusFilter';
function App() {

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoStatusFilter />
      <TodoList />
    </div>
  );
}

export default App;
