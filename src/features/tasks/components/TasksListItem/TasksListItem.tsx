import React, { useRef } from "react";

// hooks
import useTaskPopover from "features/tasks/hooks/useTaskPopover";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import TaskItemMore from "features/tasks/components/TaskItemMore";

// styles
import * as S from "features/tasks/styles/tasksStyles";

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
  const {
    isMoreVisible,
    setIsMoreVisibleTrue,
    setIsMoreVisibleHandler,
    isMoreOpen,
    setIsMoreOpenToggle
  } = useTaskPopover();

  const popoverRef = useRef();
  return (
    <div ref={popoverRef as any}>
      <S.StyledListItem
        onMouseOver={setIsMoreVisibleTrue}
        onMouseLeave={setIsMoreVisibleHandler}
      >
        <div>
          {task.completed ? (
            <S.StyledIcon
              onClick={() => unCompleteTask(task)}
              type="check-square"
            />
          ) : (
            <S.StyledIcon onClick={() => completeTask(task)} type="border" />
          )}
          <S.StyledText delete={task.completed ? true : false}>
            {task.task}
          </S.StyledText>
        </div>
        {isMoreVisible ? (
          <TaskItemMore
            isMoreOpen={isMoreOpen}
            setIsMoreOpenToggle={setIsMoreOpenToggle}
            task={task}
            deleteTask={deleteTask}
          />
        ) : null}
      </S.StyledListItem>
    </div>
  );
};

export default TasksListItem;
