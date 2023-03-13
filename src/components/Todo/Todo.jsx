import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoData } from '../../Mock/TodoData';
import "./stlyle.css";
const Todo = () => {
    const {id} = useParams();
    const myTodo = TodoData.find((todo)=>todo.id === Number(id));
    return (
        <div className='todoWrapper'>
            <span className='todoId'>id:{myTodo.id}</span>
            <span className='todoTitle'>Title:{myTodo.title}</span>
            <span className='todoBody'>Body:{myTodo.description}</span>
        </div>
    );
}

export default Todo;
