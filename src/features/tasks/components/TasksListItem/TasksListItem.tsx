import React, { useRef, createContext } from "react";
import { Mentions } from "antd";
import { lowerCase } from "lodash";

// hooks
import useTaskMore from "features/tasks/hooks/useTaskMore";
import useTaskItem from "features/tasks/hooks/useTaskItem";
import useProjects from "features/projects/hooks/useProjects";
import useTaskPrioritySetup from "features/tasks/hooks/useTaskPrioritySetup";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import TaskItemMore from "features/tasks/components/TaskItemMore";

// styles
import * as S from "features/tasks/styles/tasksStyles";

const { Option } = Mentions;

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

  const {
    setSelectedTaskHandler,
    isHighlighted,
    mentionsData,
    setPrefixHandler,
    onProjectSelect,
    taskName,
    setTaskNameHandler,
    onBlurHandler,
    prefix
  } = useTaskItem({ task, editTaskName });

  const { allProjects } = useProjects();
  const { priorities } = useTaskPrioritySetup();

  const popoverRef = useRef();

  return (
    <TaskItemContext.Provider value={{ setIsMoreOpenFalse }}>
      <div ref={popoverRef as any} onClick={() => setSelectedTaskHandler(task)}>
        <S.StyledListItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
          isHighlighted={isHighlighted}
        >
          {task.completed ? (
            <S.StyledIcon
              onClick={() => unCompleteTask(task)}
              type="check-square"
            />
          ) : (
            <S.StyledIcon
              style={{ color: priorities[task.priority].color }}
              onClick={() => completeTask(task)}
              type="border"
            />
          )}
          <S.StyledMentions
            style={{ width: "100%" }}
            placeholder={`Task name`}
            prefix={["@", "#"]}
            onSearch={setPrefixHandler}
            onSelect={onProjectSelect}
            value={taskName}
            onChange={setTaskNameHandler}
            onBlur={onBlurHandler}
          >
            {(mentionsData[prefix] || []).map((value: any) => (
              <Option key={value.id} value={value.name} data-project={value}>
                {value.name}
              </Option>
            ))}
          </S.StyledMentions>
          {allProjects.map((project: any) => {
            if (
              lowerCase(project.id) == lowerCase(task.projectId) ||
              lowerCase(project.name) == lowerCase(task.projectId)
            ) {
              return (
                <S.TaskProjectBadge
                  width="6px"
                  height="6px"
                  fontSize="11px"
                  color={project.color || "#4e44f3"}
                  text={project.name}
                />
              );
            }
          })}
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
