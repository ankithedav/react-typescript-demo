import React, { useContext } from "react";
import TodoList from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// old way of creating a function.
// function Todos(){
// return(
//   <ul>
//  <li>item 1</li>
//  <li>item 2</li>
//   </ul>
//  );
// }

// new way of creating a function.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;