import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Addtodo from "./components/Addtodo"
import Todolist from "./components/Todolist";
import TodoManagement from "./components/TodoManagement";
function MyApp() {
  return (
    <div>
      <p className="text-primary text-center display-6 lead mt-4">Welcome TodoManagement</p>
      <Routes>
        //managing 2 routes in single page
        <Route path="/" element={<TodoManagement />}>
          <Route path="/addtodo" element={<Addtodo />} />
          <Route path="" element={<Navigate replace to="Todolist" />} />
          // to load signup page while loading of Todolist
          <Route path="/todolist" element={<Todolist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MyApp;
