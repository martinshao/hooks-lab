import React from 'react'
import Provider from "./TaskList/Provider";
import TaskList from "./TaskList";
import "./styles.css";

function TaskPage() {
    return (
        <Provider>
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>React hooks with async useRedux example</h2>
                <TaskList />
            </div>
        </Provider>
    );
}

export default TaskPage
