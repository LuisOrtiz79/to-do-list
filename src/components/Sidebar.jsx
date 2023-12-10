import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""} id="sidebar-text">
          Home
        </NavLink>
          
        <NavLink to="/task-detail" className={({ isActive }) => isActive ? "selected" : ""} id="sidebar-text">
          Task Detail
        </NavLink>
          
        <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""} id="sidebar-text">
          About
        </NavLink>
      </ul>
    </div> 
  )
}

export default Sidebar;