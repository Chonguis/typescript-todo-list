import React, {MouseEvent} from 'react';
import Todo from '../Todo/Todo';

interface Props {
    chores: {id: number; chore: string; done: boolean;}[];
    toggleTodoHandler: (event: MouseEvent<HTMLElement>, id: number) => void;
}

const Todos = ({ chores, toggleTodoHandler }: Props) => {
    return( 
        <div>
            {chores.map(chore => (
                <Todo id={chore.id} chore={chore.chore} done={chore.done} toggleTodoHandler={toggleTodoHandler} />
            ))}
        </div>
    );
}

export default Todos;