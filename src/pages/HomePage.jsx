import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/taskCard";
import taskData from "../task.json";
import { useState } from "react";

function HomePage(){
    const [tasks, setTasks] = useState(taskData);
    return (
        <>
            <Navbar />

            <div>To-Do List</div>

            {tasks &&
                tasks.map((task) => {
                return <TaskCard task={task}/>;
            })}

            <Sidebar />

            <Footer />
        </>

    )
}

export default HomePage;