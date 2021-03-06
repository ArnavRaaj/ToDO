import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="text--input">
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineDelete
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />

                <AiFillEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;