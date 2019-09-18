import React from "react";
import { List, Icon } from "antd";
import styled from "styled-components";

// utils
import { Task } from "features/tasks/store/TasksStore";

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  font-size: 16px;
`;

const StyledText = styled.span`
  font-size: 16px;
  padding-left: 12px;
`;

type TasksListItem = {
  task: Task;
  deleteTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksListItem = ({
  task,
  deleteTask,
  completeTask,
  unCompleteTask
}: TasksListItem) => {
  return (
    <StyledListItem>
      <div>
        {task.completed ? (
          <StyledIcon
            onClick={() => unCompleteTask(task)}
            type="check-circle"
          />
        ) : (
          <StyledIcon
            onClick={() => completeTask(task)}
            type="loading-3-quarters"
          />
        )}
        <StyledText>{task.task}</StyledText>
      </div>
      <StyledIcon onClick={() => deleteTask(task)} type="delete" />
    </StyledListItem>
  );
};

export default TasksListItem;
