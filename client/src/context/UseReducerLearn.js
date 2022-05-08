import { useReducer, useState,useContext } from "react";
import { AdminContext } from "./AdminContext";

const ACTIONS = {
  ADD_TODO: "addTodo",
  COMPLETE_TODO: "completeTodo",
  DELETE_TODO: "deleteTodo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.COMPLETE_TODO:
      return todos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(t => t.id !== action.payload.id);
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}
export default function UseReducerLearn() {
  const adminObject = useContext(AdminContext);
  console.log("AdminContext", AdminContext);
  // console.log("adminObject", adminObject);

  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []); //const [] = useState(0);// dispatch calls reducer and action is the argument passed as object

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  function toggleTodoHandler(id) {
    dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: id } });
  }

  function deleteTodoHandler(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  }

  console.log(todos);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      <ul>
        {todos.map((t) => (
          <div key={t.id}>
            <li style={{ color: t.completed ? "green" : "red" }} >
              {t.name}
            </li>
            <button onClick={() => toggleTodoHandler(t.id)}>TOGGLE</button>
            <button onClick={() => deleteTodoHandler(t.id)}>DELETE</button>
          </div>
        ))}
      </ul>
    </>
  );
}
