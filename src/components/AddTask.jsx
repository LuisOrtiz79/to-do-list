import { useState } from "react"

const addTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    task: "",
    completed: false
  })
  
  const handlTextInput = (e) => {
    setNewTask((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleCheckInput = (e) => {
    setNewTask((prev) => ({...prev, [e.target.name]: e.target.checked}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let allTasks = [...tasks, newTask]
    setTasks(allTasks)

    setNewTask({
      task: "",
      completed: false
    })
  }
 
  return (
    <form onSubmit={handleSubmit}>
    <span>Add a Task</span>
    <div>
      <label>
        Task
        <input name="task" type="text" placeholder="New Task" value={newTask.task} onChange={handlTextInput} />
      </label>

      <br />

      <label>
        Completed
        <input name="completed" type="checkbox" checked={newTask.Completed} onChange={handleCheckInput} />
      </label>
      
      <button type="submit">Add Task</button>

    </div>
    </form>
  )
}

export default addTask;