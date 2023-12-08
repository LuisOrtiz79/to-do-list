import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div>Sidebar</div>

      <ul className="sidebar">
        {/* <Link to="/"> Home </Link>
        <Link to="/tasks"> Tasks </Link>
        <Link to="/about"> About </Link> */}

        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>
        
        <NavLink 
          to="/tasks" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          Tasks
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          About
        </NavLink>
      </ul>

      {/* <div>
        <h5>HomePage</h5>
        <h5>Add Task</h5>
        <h5>Show Completed</h5>
      </div> */}
    </>
  )
}

export default Sidebar;