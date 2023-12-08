import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";
import taskData from "../task.json";
import { useState } from "react";
import {ProgressBar } from "../components/ProgressBar";

function HomePage(){
    const [tasks, setTasks] = useState(taskData);
    return (
        <>
            <div>To-Do List</div>
            <ProgressBar tasks={tasks} setTasks={setTasks} />
            <AddTask tasks={tasks} setTasks={setTasks} />

            {tasks &&
                tasks.map((task) => {
                return <TaskCard task={task}/>;
            })}
        </>

    )
}

export default HomePage;
