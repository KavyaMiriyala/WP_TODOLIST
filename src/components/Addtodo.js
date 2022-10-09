import React from "react";
import { useForm } from "react-hook-form";
import { addTodo } from "../Slices/todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
function Addtodo(props) {
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch = useDispatch();
  let todolist=useSelector(state=>state.todos)

 const onsub =async (todoObj) => {
    //create action obj
    if(!todolist.includes(todoObj.newtodo.charAt(0).toUpperCase()+todoObj.newtodo.slice(1),0)){
    let actionObj = addTodo(todoObj.newtodo.charAt(0).toUpperCase()+todoObj.newtodo.slice(1));
    //dispatch action obj to store
    dispatch(actionObj);
    const ok=await Swal({
      title:`${todoObj.newtodo} added successfully`,
      text:"Check List!",
      icon:"success",
    });
   {setTimeout(function(){window.location.reload();},10)}
    }
    else{
      {setTimeout(function(){window.location.reload();},10)}
      alert("Todo already exists")
    }
  };

  return (
    <div>
      <p className="display-5 text-secondary text-center">Add new Task</p>
      <form className="w-25 mx-auto" onSubmit={handleSubmit(onsub)}>
        <div className="mb-3 text-center">
          <label htmlFor="todo" className="text-success display-6 ">
            New Todo
          </label>
          <input
            type="text"
            id="todo"
            className="form-control "
            autoComplete="off"
            {...register("newtodo", { required: true })}
            
          />
          {errors.newtodo?.type === "required" && (
            <p className="text-danger">List can't be empty!</p>
          )}
        </div>
        <button type="submit" className="btn btn-success text-center d-block mx-auto">
          Add new todo
        </button>
        <button className="btn btn-success text-center d-block mx-auto mt-3" onClick={()=>navigate("/todolist")}>Todo List</button>
      </form>
    </div>
  );
}

export default Addtodo;
