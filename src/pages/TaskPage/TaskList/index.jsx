import React, { useContext } from "react";
import { Context } from "./Provider";
import { Task } from "./Task";
import { COMP_ALL } from "./TaskReducer";
import { Input } from "./Input";

function TaskList() {
    const { state, dispatch } = useContext(Context);
    return (
        <div>
            <Input />
            <hr />
            <button onClick={() => dispatch({ type: COMP_ALL })}>Complete all</button>
            <hr />
            {state &&
                state.map(task => (
                    <Task key={task.id} fromDispatch={dispatch} {...task} />
                ))}
        </div>
    );
}

export default TaskList
