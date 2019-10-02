import React, { useContext } from "react";
import { Typography, Tooltip } from "antd";

// hooks
import useTaskPrioritySetup, {
  Priority
} from "features/tasks/hooks/useTaskPrioritySetup";

// utils
import { Task } from "features/tasks/store/TasksStore";
import { TaskItemContext } from "features/tasks/components/TasksListItem";

// styles
import {
  MoreItemIconsWrapper,
  MoreItem,
  MoreItemIcon
} from "components/elements/List";

const { Paragraph } = Typography;

type TaskItemMorePriority = {
  task: Task;
  updateTaskPriority: (task: Task, priority: number) => void;
};

const TaskItemMorePriority = ({
  updateTaskPriority,
  task
}: TaskItemMorePriority) => {
  const { setIsMoreOpenFalse } = useContext(TaskItemContext);

  const { priorities } = useTaskPrioritySetup();

  return (
    <MoreItem>
      <Paragraph strong>Priority</Paragraph>
      <MoreItemIconsWrapper>
        {priorities.map(({ name, color, level }: Priority) => (
          <Tooltip title={name} placement="top">
            <MoreItemIcon
              type="alert"
              style={{
                color,
                padding: "6px",
                borderRadius: "3px",
                background:
                  task.priority === level
                    ? "rgba(128, 128, 128, 0.2)"
                    : "transparent"
              }}
              onClick={() => {
                updateTaskPriority(task, level);
                setIsMoreOpenFalse();
              }}
            />
          </Tooltip>
        ))}
      </MoreItemIconsWrapper>
    </MoreItem>
  );
};

export default TaskItemMorePriority;
