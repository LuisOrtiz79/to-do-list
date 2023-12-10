import { useState } from "react";

const TaskCard = ({ task, setTasks }) => {
  const defaultCheck = task.completed ? task.completed : false;
  const [isCompleted, setIsCompleted] = useState(defaultCheck);

  return (
    <div className="taskCard">
      <span>
        {task.task}
      </span>

      <br />
          
      <button type="checkbox" checked={isCompleted} onClick={() => setIsCompleted((prev) => !prev)}>
        <span >
          { isCompleted ? "✅" : "⬜️" }
        </span>
      </button>

    </div>
  )
}

export default TaskCard;
