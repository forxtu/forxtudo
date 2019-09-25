import React, { useState, useEffect, useRef, createContext } from "react";

// hooks
import useTaskMore from "features/tasks/hooks/useTaskMore";
import useTaskItem from "features/tasks/hooks/useTaskItem";

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

  const { selectedTask, setSelectedTaskHandler } = useTaskItem();

  const popoverRef = useRef();

  const [taskName, setTaskName] = useState();
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  useEffect(() => {
    setTaskName(task.task);
  }, [task.task]);

  useEffect(() => {
    if (selectedTask && task && selectedTask.id == task.id) {
      setIsHighlighted(true);
    } else {
      setIsHighlighted(false);
    }
  }, [selectedTask && selectedTask.id]);

  return (
    <TaskItemContext.Provider value={{ setIsMoreOpenFalse }}>
      <div ref={popoverRef as any} onClick={() => setSelectedTaskHandler(task)}>
        <S.StyledListItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
          isHighlighted={isHighlighted}
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
            <S.StyledInput
              onBlur={(e: any) => editTaskName(task, e.target.value)}
              onPressEnter={(e: any) => editTaskName(task, e.target.value)}
              value={taskName}
              onChange={(e: any) => setTaskName(e.target.value)}
            />
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
