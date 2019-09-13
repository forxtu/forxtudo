import React from "react";
import { List, Icon } from "antd";
import styled from "styled-components";

// utils
import { db } from "config/Auth";

interface TodoListItemProps {
  todo: any;
}

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

const SyledIcon = styled(Icon)`
  font-size: 16px;
`;

const SyledText = styled.span`
  font-size: 16px;
  padding-left: 12px;
`;

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

  const completeTask = () => {
    db.collection("tasks")
      .doc(todo.id)
      .update({
        completed: true
      });
  };

  const unCompleteTask = () => {
    db.collection("tasks")
      .doc(todo.id)
      .update({
        completed: false
      });
  };

  return (
    <StyledListItem>
      <div>
        {todo.completed ? (
          <SyledIcon onClick={unCompleteTask} type="check-circle" />
        ) : (
          <SyledIcon onClick={completeTask} type="loading-3-quarters" />
        )}
        <SyledText>{todo.task}</SyledText>
      </div>
      <SyledIcon onClick={deleteTask} type="delete" />
    </StyledListItem>
  );
};

export default TodoListItem;
