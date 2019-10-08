import React from "react";
import { Icon, Tooltip, Popover } from "antd";

// styles
import * as S from "features/tasks/components/TasksFormSettings/TaskSetupLabels/taskSetupLabelsStyles";

type TaskSetupLabels = {
  taskSettings: any;
};

const TaskSetupLabels = ({ taskSettings }: TaskSetupLabels) => {
  const {
    taskLabels,
    setTaskLabelsHandler,
    toggleIsTaskSetupLabelsOpen,
    isTaskSetupLabelsOpen
  } = taskSettings.taskLabelsSetup;

  return (
    <Tooltip placement="bottom" title="Select a label">
      <Popover
        placement="bottom"
        content={
          <S.CheckboxGroup
            options={taskSettings.allLabels}
            onChange={setTaskLabelsHandler}
            value={taskLabels}
          />
        }
        trigger="click"
        visible={isTaskSetupLabelsOpen}
        onVisibleChange={toggleIsTaskSetupLabelsOpen}
      >
        <Icon type="tags" style={{ fontSize: "18px" }} />
      </Popover>
    </Tooltip>
  );
};

export default TaskSetupLabels;
