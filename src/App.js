import './App.css';
import React from "react";
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h1 className="app-header">ToDo App</h1>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
