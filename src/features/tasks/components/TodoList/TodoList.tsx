import React from "react";
import TodoListItem from "features/tasks/components/TodoListItem";

interface Props {
  todos: any[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
