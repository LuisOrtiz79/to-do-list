const TaskCard = ({ task }) => {
  return (
    <div>
        <span>
            {task.task}
        </span>
        <span >
            {task.completed ? "✅" : "⬜️"}
        </span>

    </div>
  )
}

export default TaskCard;
