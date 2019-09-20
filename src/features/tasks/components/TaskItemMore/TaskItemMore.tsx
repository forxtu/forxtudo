import React from "react";
import { Popover, Tooltip } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import TaskItemMorePopover from "features/tasks/components/TaskItemMorePopover";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type TaskItemMore = {
  task: Task;
  deleteTask: (task: Task) => void;
  isMoreOpen: boolean;
  setIsMoreOpenToggle: () => void;
};

const TaskItemMore = ({
  isMoreOpen,
  setIsMoreOpenToggle,
  task,
  deleteTask
}: TaskItemMore) => {
  return (
    <Tooltip placement="right" title="More">
      <Popover
        placement="bottomRight"
        content={
          <TaskItemMorePopover
            task={task}
            deleteTask={deleteTask}
            setIsMoreOpenToggle={setIsMoreOpenToggle}
          />
        }
        title={task.task}
        trigger="click"
        visible={isMoreOpen}
        onVisibleChange={setIsMoreOpenToggle}
      >
        <S.More type="ellipsis" />
      </Popover>
    </Tooltip>
  );
};

export default TaskItemMore;
