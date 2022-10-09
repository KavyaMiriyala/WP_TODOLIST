import React from "react";
import { Outlet, NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
function TodoManagement() {

  let todos=useSelector(state=>state.todos)
  return (
    <div className="mt-3">
      {/* links */}
      <ul className="nav nav-pills justify-content-around mb-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="Todolist">
            Todo List<span className="badge text-secondary mx-2 bg-white">{todos.length}</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Addtodo">
            Add Todo
          </NavLink>
        </li>
      </ul>
      {/* place holder for components */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default TodoManagement;
