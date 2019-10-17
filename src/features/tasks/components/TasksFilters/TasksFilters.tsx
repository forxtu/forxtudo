import * as React from "react";
import { Popover, Tooltip, Icon } from "antd";
import styled from "styled-components";

// hooks
import useItemMore from "hooks/useItemMore";

// components
import TasksFiltersPopover from "features/tasks/components/TasksFilters/TasksFiltersPopover";

const MoreIcon = styled(Icon)`
  font-size: 31px;
  position: absolute;
  top: 25px;
  right: 36px;
`;

type TasksFiltersProps = {
  isCompletedTasksShown: boolean;
  toggleIsCompletedTasksShown: () => void;
};

const TasksFilters = ({
  isCompletedTasksShown,
  toggleIsCompletedTasksShown
}: TasksFiltersProps) => {
  const { isMoreOpen, setIsMoreOpenToggle } = useItemMore();

  return (
    <Tooltip placement="top" title="More">
      <Popover
        placement="bottom"
        content={
          <TasksFiltersPopover
            isCompletedTasksShown={isCompletedTasksShown}
            toggleIsCompletedTasksShown={toggleIsCompletedTasksShown}
            setIsMoreOpenToggle={setIsMoreOpenToggle}
          />
        }
        trigger="click"
        visible={isMoreOpen}
        onVisibleChange={setIsMoreOpenToggle}
      >
        <MoreIcon type="ellipsis" />
      </Popover>
    </Tooltip>
  );
};

export default TasksFilters;
