import React from "react";
import TodoListItem from "features/tasks/components/TodoListItem";
import { List } from "antd";

interface Props {
  todos: any[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </List>
  );
};

export default TodoList;
