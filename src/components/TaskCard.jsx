import { useState } from "react";

const TaskCard = ({ tasks, task, setTasks }) => {
  const defaultCheck = task.completed ? task.completed : false;
  const [isCompleted, setIsCompleted] = useState(defaultCheck);

  const handleCheckboxClick = () => {
    const updatedTasks = tasks.map((t) => {
      if (t.task === task.task) {
        return { ...t, completed: !isCompleted };
      }
      return t;
    });

    setTasks(updatedTasks);

    setIsCompleted((prev) => !prev);
  };

  return (
    <div className="taskCard">
      <span>
        {task.task}
      </span>

      <br />
          
      <button type="checkbox" checked={isCompleted} onClick={handleCheckboxClick}>
        <span >
          { isCompleted ? "✅" : "⬜️" }
        </span>
      </button>

    </div>
  )
}

export default TaskCard;
