import React from "react";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delTodo } from "../Slices/todoSlice";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Todolist(/*props*/) {
  // component can access the state using useSelector of react-redux
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let todolist = useSelector((state) => state.todos);
  const delFun = async (todoDelIdx) => {
    const willDel = await Swal({
      title: `Are you sure to delete ${todolist[todoDelIdx]}?`,
      text: "Click OK to delete",
      icon: "warning",
      // dangerMode:true,
    });
    if (willDel) {
      const KL = delTodo(todoDelIdx);
      dispatch(KL);
      Swal({
        title: `${todolist[todoDelIdx]} deleted successfully`,
        text: "Deleted",
        icon: "success",
      });
    }
  };
  return (
    <div>
      <p className="display-5 text-secondary text-start">List of todos</p>
      {(todolist.length===0 && <p>List is Empty! <br></br> <button className="btn btn-success text-center mt-2" onClick={()=>navigate("/addtodo")}>Add One</button> </p>)}
      <div className="text-start list-group">
    {
      todolist.length>0 && 
        todolist.map((todo, index) => (
          <li className="list-group-item list-group-item-action w-50">
            {todo}{" "}
            <MdDeleteOutline
              className="text-danger"
              onClick={() => delFun(index)}
            />
          </li>
        ))
    }
      </div>
      
    </div>
  );
}

export default Todolist;
