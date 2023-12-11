import { useState } from "react";

const TaskCard = ({ tasks, task, index, setTasks }) => {
  const defaultCheck = task.completed ? task.completed : false;
  const [isCompleted, setIsCompleted] = useState(defaultCheck);
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

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

  const deleteTask = (deleteTask) => {
    const deleteTasks = tasks.filter(task => {
      return task.task !== deleteTask;
    });

    setTasks(deleteTasks);
  };

  const editTask = () => {
    let theseTasks = [...tasks];
    theseTasks[index] = newTask;

    setTasks(theseTasks);
    setIsEditing(false);
  }

  const handlTextInput = (e) => {
    setNewTask((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  return (
    <> { !isEditing ?
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

        <br />
        <div className="taskbutton">
          <button type="submit1" onClick={() => deleteTask(task.task)}>
            Delete
          </button>

          <button type="submit1" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      </div>

    :
      <form onSubmit={editTask}>
        <label>
          Task
          <input name="task" type="text" placeholder="New Task" value={newTask.task} onChange={handlTextInput} />
        </label>

        <button type="submit">
          Edit Task
        </button>
      </form>
    }
    </>

  )
}

export default TaskCard;
