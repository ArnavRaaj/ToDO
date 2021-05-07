import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoFromServer") || "[]"));

    useEffect(() => {
        localStorage.setItem("todoFromServer", JSON.stringify(todos));
    }, [todos])

    const addToDo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const editTodo = (todoID, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoID ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h2>What's your Goal Today.!!</h2>
            <TodoForm onSubmit={addToDo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
        </>
    )
}

export default TodoList
