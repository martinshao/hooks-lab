import React, { useContext, useState } from "react";
import { Context } from "./Provider";

export const Input = () => {
    const [value, setValue] = useState("");
    const { startAddTodo } = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        startAddTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New todo"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <input type="submit" value="add todo" />
        </form>
    );
};
