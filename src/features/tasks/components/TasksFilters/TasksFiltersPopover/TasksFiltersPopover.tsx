import * as React from "react";

// components
import { Primary } from "components/elements/Text";

// styles
import {
  MoreWrapper,
  MoreItemBtn,
  MoreItemIconsWrapper,
  MoreItemIcon
} from "components/elements/List";

type TasksFiltersPopover = {
  isCompletedTasksShown: boolean;
  toggleIsCompletedTasksShown: () => void;
  setIsMoreOpenToggle: () => void;
};

const TasksFiltersPopover = ({
  isCompletedTasksShown,
  toggleIsCompletedTasksShown,
  setIsMoreOpenToggle
}: TasksFiltersPopover) => {
  const toggleIsCompletedTasksShownHandler = () => {
    toggleIsCompletedTasksShown();
    setIsMoreOpenToggle();
  };

  return (
    <MoreWrapper>
      <MoreItemBtn onClick={toggleIsCompletedTasksShownHandler}>
        <MoreItemIconsWrapper>
          {isCompletedTasksShown ? (
            <>
              <MoreItemIcon type="eye-invisible" />
              <Primary>Hide completed</Primary>
            </>
          ) : (
            <>
              <MoreItemIcon type="eye" />
              <Primary>Show completed</Primary>
            </>
          )}
        </MoreItemIconsWrapper>
      </MoreItemBtn>
    </MoreWrapper>
  );
};

export default TasksFiltersPopover;
