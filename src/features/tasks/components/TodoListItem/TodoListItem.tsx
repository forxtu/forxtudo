import React from "react";

// utils
import { db } from "config/Auth";

interface TodoListItemProps {
  todo: any;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const deleteTask = () => {
    db.collection("tasks")
      .doc(todo.id)
      .delete()
      .then(() => {
        console.log(todo.task + "deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <li className="list-group-item">
      <span>{todo.task}</span>
      <span onClick={deleteTask}>X</span>
    </li>
  );
};

export default TodoListItem;
