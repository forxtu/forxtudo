import React, { useState, useEffect } from "react";
import TasksListItem from "features/tasks/components/TasksListItem";
import { List, Result, Icon } from "antd";
import { isEqual, isEmpty } from "lodash";

// utils
import { Task } from "features/tasks/store/TasksStore";
import { isDateBeforeTodayHandler } from "utils/dates";

// components
import { CountBadgeText } from "components/elements/Badge";

// styles
import * as S from "features/tasks/styles/tasksStyles";

type TasksList = {
  allTasks: Task[];
  tasks: Task[];
  filteredByDateTasks: Task[];
  filterType: string;
  deleteTask: (task: Task) => void;
  editTaskName: (task: Task, taskValue: string) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
};

const TasksList = ({
  allTasks,
  tasks,
  filterType,
  filteredByDateTasks,
  deleteTask,
  editTaskName,
  completeTask,
  unCompleteTask
}: TasksList) => {
  const [isCompletedAvailable, setIsCompletedAvailable] = useState(false);

  const completedTasks = (filterType === "date" ? allTasks : tasks).filter(
    (task: Task) => task.completed
  );

  const overdueTasks = allTasks.filter(
    (task: Task) => !task.completed && isDateBeforeTodayHandler(task.date)
  );

  const isCompletedAvailableHandler = (task: Task) => task.completed;
  const isSomeOfTasksCompleted = (filterType === "date"
    ? allTasks
    : tasks
  ).some(isCompletedAvailableHandler);

  useEffect(() => {
    setIsCompletedAvailable(isSomeOfTasksCompleted);
  }, [isSomeOfTasksCompleted]);

  const filteredByTodayTasksLength = filteredByDateTasks.filter(
    (task: Task) => !task.completed
  ).length;

  const filteredByProjectTasksLength = tasks.filter(
    (task: Task) => !task.completed
  ).length;

  return (
    <>
      {isEqual(filterType, "date") && !isEmpty(overdueTasks) && (
        <S.StyledCollapse bordered={false} expandIconPosition="right">
          <S.StyledPanel
            header={
              <CountBadgeText count={overdueTasks.length}>
                <h1>Overdue</h1>
              </CountBadgeText>
            }
            key="1"
          >
            {overdueTasks.map((task: Task) => (
              <TasksListItem
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                editTaskName={editTaskName}
                completeTask={completeTask}
                unCompleteTask={unCompleteTask}
              />
            ))}
          </S.StyledPanel>
        </S.StyledCollapse>
      )}
      {isEqual(filterType, "date") ? (
        <>
          {!!filteredByTodayTasksLength ? (
            <S.StyledCollapse
              bordered={false}
              expandIconPosition="right"
              defaultActiveKey="1"
            >
              <S.StyledPanel
                header={
                  <CountBadgeText count={filteredByTodayTasksLength}>
                    <h1>Today</h1>
                  </CountBadgeText>
                }
                key="1"
              >
                {filteredByDateTasks.map((task: Task) => (
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
                ))}
              </S.StyledPanel>
            </S.StyledCollapse>
          ) : (
            <Result
              status="success"
              title="All tasks for today are done! Enjoy your day!"
            />
          )}
        </>
      ) : (
        <>
          {!!filteredByProjectTasksLength ? (
            <List>
              {tasks.map((task: Task) => (
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
              ))}
            </List>
          ) : (
            <Result
              icon={<Icon type="file-add" theme="twoTone" />}
              title="Add your first tasks!"
            />
          )}
        </>
      )}
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
