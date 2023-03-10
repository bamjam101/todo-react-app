import React from "react";
import { useDispatch } from "../context/Context";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        className="todo-checkbox-field"
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(event) => {
          dispatch({
            type: "change",
            todo: { ...todo, done: event.target.checked },
          });
        }}
      />
      <label htmlFor={`${todo.id}-done`}>{todo.text}</label>
      <span
        onClick={() => {
          dispatch({
            type: "remove",
            id: todo.id,
          });
        }}
        className="todo-delete-btn"
      >
        X
      </span>
    </>
  );
};

export default Todo;
