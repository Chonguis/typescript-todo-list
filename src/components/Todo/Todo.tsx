import React, {MouseEvent} from 'react';
import './Todo.css';

interface Props {
    id: number; chore: string; done: boolean; 
    toggleTodoHandler: (event: MouseEvent<HTMLElement>, id:number) => void;
}

const Todo = ({ id, chore, done, toggleTodoHandler }: Props) => {
    return (
        <div>
            <span className={done ? "done" : "undone"}>{id} {chore}</span>
            <button onClick={(e) => toggleTodoHandler(e, id)}> 
                {done ? "Undo" : "Done"}
            </button>
        </div>
    );
}

export default Todo;