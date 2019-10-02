import React from "react";
import { Icon, Tooltip, Popover } from "antd";

// utils
import { Project } from "features/projects/store/ProjectsStore";
import setIsInbox from "utils/setIsInbox";

// components
import DefaultProjectItem from "components/blocks/DefaultProjectItem";

// styles
import * as S from "features/tasks/components/TasksFormSettings/tasksFormSettingsStyles";
import { MoreWrapper, MoreItemBtn } from "components/elements/List";
import ColorBadge from "components/elements/ColorBadge";

type TaskSetupPriority = {
  taskSettings: any;
};

const TaskSetupPriority = ({ taskSettings }: TaskSetupPriority) => {
  const {
    priorities,
    taskPriority,
    isTaskSetupPriorityOpen,
    toggleIsTaskSetupPriorityOpen,
    setTaskPriorityHandler
  } = taskSettings.taskPrioritiesSetup;

  return (
    <Tooltip placement="bottom" title="Priority">
      <Popover
        placement="bottom"
        content={
          <MoreWrapper
            dataSource={priorities}
            renderItem={(priority: any) => (
              <MoreItemBtn
                onClick={() => setTaskPriorityHandler(priority.level)}
              >
                <ColorBadge color={priority.color} text={priority.name} />
                {taskPriority === priority.level ? (
                  <Icon type="check" style={{ color: "green" }} />
                ) : null}
              </MoreItemBtn>
            )}
          />
        }
        trigger="click"
        visible={isTaskSetupPriorityOpen}
        onVisibleChange={toggleIsTaskSetupPriorityOpen}
      >
        <Icon type="alert" style={{ fontSize: "18px" }} />
      </Popover>
    </Tooltip>
  );
};

export default TaskSetupPriority;
