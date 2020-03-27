import React, {MouseEvent} from 'react';
import Todo from '../Todo/Todo';

interface Props {
    chores: {id: number; chore: string; done: boolean;}[];
    toggleTodoHandler: (event: MouseEvent<HTMLInputElement>, id: number) => void;
    deleteTodoHandler: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Todos = ({ chores, toggleTodoHandler, deleteTodoHandler }: Props) => {
    return( 
        <div>
            {chores.map(chore => (
                <Todo 
                    id={chore.id} 
                    chore={chore.chore} 
                    done={chore.done} 
                    toggleTodoHandler={toggleTodoHandler}
                    deleteTodoHandler={deleteTodoHandler} />
            ))}
        </div>
    );
}

export default Todos;