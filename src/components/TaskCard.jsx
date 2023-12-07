const TaskCard = ({ task }) => {
  return (
    <div className="taskCard">
        <span>
            {task.task}
        </span>
        <br />
        <span >
            {task.completed ? "✅" : "⬜️"}
        </span>

    </div>
  )
}

export default TaskCard;
