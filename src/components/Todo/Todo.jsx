import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoData } from '../../Mock/TodoData';
import "./stlyle.css";
const Todo = () => {
    const {id} = useParams();
    const myTodo = TodoData.find((todo)=>todo.id === Number(id));
    return (
        myTodo?(<div className='todoWrapper'>
            <span className='todoId'>id:{myTodo?.id}</span>
            <span className='todoTitle'>Title:{myTodo?.title}</span>
            <span className='todoBody'>Body:{myTodo?.description}</span>
        </div>):<h1 style={{color:'red'}}>ERROR Page Not Found 404</h1>
    );
}

export default Todo;
