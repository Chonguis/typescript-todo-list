import React, { FormEvent, ChangeEvent } from 'react'

interface Props {
    submitChoreHandler: (event: FormEvent<HTMLFormElement>) => void;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const AddForm = ({ submitChoreHandler, onChangeHandler, value }: Props) => {
    return (
        <div>
            <form onSubmit={submitChoreHandler}>
                <input type="text" name="choreText" value={value} onChange={onChangeHandler} />
            </form>
        </div>
    )
}

export default AddForm;
