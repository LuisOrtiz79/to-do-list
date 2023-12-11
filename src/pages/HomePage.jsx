import TaskCard from "../components/TaskCard";
import taskData from "../task.json";
import AddTask from "../components/AddTask";
import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import logo from "../assets/pin-icon_480.png"

function HomePage(){
    const [tasks, setTasks] = useState(taskData);
    return (
        <div className="homePage">
            <h1>To-Do List <img src={logo} alt="pin Logo" className="pinlogo" /></h1>

            <ProgressBar tasks={tasks} setTasks={setTasks} />
            
            <div className="displaylist">
                <div className="displayform">
                    <AddTask tasks={tasks} setTasks={setTasks} />
                </div>

                <div className="displaytask">
                    {tasks &&
                        tasks.map((task, index) => {
                        return <TaskCard tasks={tasks} task={task} index={index} setTasks={setTasks} />;
                    })}
                </div>
                
            </div>

        </div>

    )
}

export default HomePage;
