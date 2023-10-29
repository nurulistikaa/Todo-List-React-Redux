import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStatusFilter from './components/TodoStatusFilter';
function App() {

  return (
    <div className="container">
      <h1>What's The Plan For Today?</h1>
      <TodoForm />
      <TodoStatusFilter />
      <TodoList />
    </div>
  );
}

export default App;
