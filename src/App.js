import './App.css';
import React from "react";
import TodoList from './components/TodoList';
import { AiFillHeart } from "react-icons/ai"

function App() {
  return (
    <>
      <h1 className="app-header">ToDo App</h1>
      <div className="todo-app">
        <TodoList />
      </div>
      <footer>
        <div class="footer-msg">
          Made with <AiFillHeart className="heart-icon"/> by <a href="https://arnavportfolio.netlify.app/" target="_blank" >Arnav</a>
        </div>
        <small class="footer-copyright">
          © 2021 AcroUI Designs
        </small>
      </footer>
    </>
  );
}

export default App;
