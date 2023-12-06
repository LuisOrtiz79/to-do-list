import TaskCard from "../components/taskCard";
import taskData from "../task.json";
import { useState } from "react";

function HomePage(){
    const [tasks, setTasks] = useState(taskData);
    return (
        <>
            <div>To-Do List</div>

            {tasks &&
                tasks.map((task) => {
                return <TaskCard task={task}/>;
            })}
        </>

    )
}

export default HomePage;