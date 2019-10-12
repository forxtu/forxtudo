import React, { useState, useEffect } from "react";
import TasksListItem from "features/tasks/components/TasksListItem";
import { List } from "antd";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import { CountBadgeText } from "components/elements/Badge";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type TasksList = {
  tasks: Task[];
  filteredByDateTasks: Task[];
  filterType: string;
  deleteTask: (task: Task) => void;
  editTaskName: (task: Task, taskValue: string) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksList = ({
  tasks,
  filterType,
  filteredByDateTasks,
  deleteTask,
  editTaskName,
  completeTask,
  unCompleteTask
}: TasksList) => {
  const [isCompletedAvailable, setIsCompletedAvailable] = useState(false);

  const completedTasks = (filterType === "date"
    ? filteredByDateTasks
    : tasks
  ).filter((task: Task) => task.completed);

  const isCompletedAvailableHandler = (task: Task) => task.completed;
  const isSomeOfTasksCompleted = (filterType === "date"
    ? filteredByDateTasks
    : tasks
  ).some(isCompletedAvailableHandler);

  useEffect(() => {
    setIsCompletedAvailable(isSomeOfTasksCompleted);
  }, [isSomeOfTasksCompleted]);

  return (
    <>
      <List>
        {(filterType === "date" ? filteredByDateTasks : tasks).map(
          (task: Task) => (
            <>
              {!task.completed && (
                <TasksListItem
                  task={task}
                  key={task.id}
                  deleteTask={deleteTask}
                  editTaskName={editTaskName}
                  completeTask={completeTask}
                  unCompleteTask={unCompleteTask}
                />
              )}
            </>
          )
        )}
      </List>
      {isCompletedAvailable && (
        <S.StyledCollapse bordered={false} expandIconPosition="right">
          <S.StyledPanel
            header={
              <CountBadgeText count={completedTasks.length}>
                <h1>Completed</h1>
              </CountBadgeText>
            }
            key="1"
          >
            {completedTasks.map((task: Task) => (
              <>
                {task.completed && (
                  <TasksListItem
                    task={task}
                    key={task.id}
                    deleteTask={deleteTask}
                    editTaskName={editTaskName}
                    completeTask={completeTask}
                    unCompleteTask={unCompleteTask}
                  />
                )}
              </>
            ))}
          </S.StyledPanel>
        </S.StyledCollapse>
      )}
    </>
  );
};

export default TasksList;
