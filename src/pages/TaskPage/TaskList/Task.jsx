import React from "react";
import { toggleComplete } from "./TaskReducer";
import "./task.css";

export const Task = ({ id, completed, title, fromDispatch }) => {
    return (
        <div className={completed ? "completed" : null}>
            <input
                type="checkbox"
                onChange={() => fromDispatch(toggleComplete(id))}
                checked={completed}
            />
            {title}
        </div>
    );
};
