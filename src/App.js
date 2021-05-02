import './App.css';
import React from "react";
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
