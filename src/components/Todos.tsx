import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
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
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
