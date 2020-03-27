import React, {MouseEvent} from 'react';
import './Todo.css';

interface Props {
    id: number; chore: string; done: boolean; 
    toggleTodoHandler: (event: MouseEvent<HTMLInputElement>, id:number) => void;
    deleteTodoHandler: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Todo = ({ id, chore, done, toggleTodoHandler, deleteTodoHandler }: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(e) => toggleTodoHandler(e, id)} /> 
            <span className={done ? "done" : "undone"}>{id} {chore}</span>
            <button onClick={(e) => deleteTodoHandler(e, id)}>Delete</button>
        </div>
    );
}

export default Todo;