import React from "react";
import { List, Icon } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";

// hooks
import useTasks from "features/tasks/hooks/useTasks";

// utils
import { db } from "config/Auth";

interface TodoListItemProps {
  todo: any;
  deleteTask: any;
  completeTask: any;
  unCompleteTask: any;
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

const TodoListItem = ({
  todo,
  deleteTask,
  completeTask,
  unCompleteTask
}: TodoListItemProps) => {
  return (
    <StyledListItem>
      <div>
        {todo.completed ? (
          <SyledIcon
            onClick={() => unCompleteTask(todo.id)}
            type="check-circle"
          />
        ) : (
          <SyledIcon
            onClick={() => completeTask(todo.id)}
            type="loading-3-quarters"
          />
        )}
        <SyledText>{todo.task}</SyledText>
      </div>
      <SyledIcon onClick={() => deleteTask(todo)} type="delete" />
    </StyledListItem>
  );
};

export default TodoListItem;
