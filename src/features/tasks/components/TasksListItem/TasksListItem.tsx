import React, { useRef, createContext } from "react";

// hooks
import useTaskMore from "features/tasks/hooks/useTaskMore";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import TaskItemMore from "features/tasks/components/TaskItemMore";

// styles
import * as S from "features/tasks/styles/tasksStyles";

export const TaskItemContext = createContext<any>(null);

type TasksListItem = {
  task: Task;
  deleteTask: (task: Task) => void;
  editTaskName: (task: Task, taskValue: string) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksListItem = ({
  task,
  deleteTask,
  editTaskName,
  completeTask,
  unCompleteTask
}: TasksListItem) => {
  const {
    isMoreVisible,
    setIsMoreVisibleTrue,
    setIsMoreVisibleHandler,
    isMoreOpen,
    setIsMoreOpenFalse,
    setIsMoreOpenToggle
  } = useTaskMore();

  const popoverRef = useRef();

  return (
    <TaskItemContext.Provider value={{ setIsMoreOpenFalse }}>
      <div ref={popoverRef as any}>
        <S.StyledListItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
        >
          <>
            {task.completed ? (
              <S.StyledIcon
                onClick={() => unCompleteTask(task)}
                type="check-square"
              />
            ) : (
              <S.StyledIcon onClick={() => completeTask(task)} type="border" />
            )}
            <S.StyledText
              editable={{
                onChange: taskValue => editTaskName(task, taskValue)
              }}
              delete={task.completed ? true : false}
            >
              {task.task}
            </S.StyledText>
          </>
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
    </TaskItemContext.Provider>
  );
};

export default TasksListItem;
