import React, {useState} from 'react';

interface todoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC< todoFormProps > = (props) => {

    const [title, setTitle] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            props.onAdd(title);
            setTitle("");
        }
    }

    return(
        <div className="input-fields mt2">
            <input value={title} onChange={changeHandler} onKeyPress={keyPressHandler} id="title" placeholder="Введите значение дело" />
            <label className="active" htmlFor="title">Введите значение дело</label>
        </div>
    )
}