import React, { useReducer, useEffect } from "react";
import { reducer, fetchInitial, addTodo } from "./TaskReducer";

export const Context = React.createContext();

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(data => dispatch(fetchInitial(data)));
    }, []);

    const startAddTodo = text => {
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                title: text,
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => dispatch(addTodo(data)));
    };

    return (
        <Context.Provider value={{ state, dispatch, startAddTodo }}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
