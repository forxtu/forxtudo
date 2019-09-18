import React from "react";
import TodoListItem from "features/tasks/components/TodoListItem";
import { List } from "antd";

interface Props {
  todos: any[];
  deleteTask: any;
  completeTask: any;
  unCompleteTask: any;
}

const TodoList = ({
  todos,
  deleteTask,
  completeTask,
  unCompleteTask
}: Props) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
          unCompleteTask={unCompleteTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
