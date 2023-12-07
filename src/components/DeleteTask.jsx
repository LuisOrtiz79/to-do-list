const DeleteTask = ({ tasks, setTasks }) => {
    const deleteTask = (tasks) => {
        setTasks(tasks);
    };
  return (
    <div>
      <button type="submit" onChange={deleteTask(tasks)}>Delete Task</button>
    </div>
  )
}

export default DeleteTask;
