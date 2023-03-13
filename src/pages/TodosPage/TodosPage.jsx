import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TodoData } from '../../Mock/TodoData';
import "./style.css";
class TodosPage extends Component {
    render() {
        return (
            <>
                <ul className='todosPageWrapper'>
                    {TodoData.map((todo)=>{
                        return(
                        <li key={todo.id}><Link to={`/todos/${todo.id}`}>{todo.title}</Link></li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default TodosPage;
