import React, { useRef, createContext } from "react";
import { Mentions } from "antd";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

// hooks
import useTaskMore from "features/tasks/hooks/useTaskMore";
import useTaskItem from "features/tasks/hooks/useTaskItem";
import useTaskPrioritySetup from "features/tasks/hooks/useTaskPrioritySetup";

// utils
import { Task } from "features/tasks/store/TasksStore";

// components
import TaskItemMore from "features/tasks/components/TaskItemMore";
import TaskDate from "features/tasks/components/TasksListItem/TaskDate";
import TaskProject from "features/tasks/components/TasksListItem/TaskProject";

// styles
import * as S from "features/tasks/styles/tasksStyles";

const { Option } = Mentions;

export const TaskItemContext = createContext<any>(null);

type Params = {
  history: string | undefined;
};

type TasksListItem = {
  task: Task;
  deleteTask: (task: Task) => void;
  editTaskName: (task: Task, taskValue: string) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
} & RouteComponentProps<Params>;

const TasksListItem = ({
  task,
  deleteTask,
  editTaskName,
  completeTask,
  unCompleteTask,
  history
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

  const { priorities } = useTaskPrioritySetup();

  const popoverRef = useRef();

  return (
    <TaskItemContext.Provider value={{ setIsMoreOpenFalse }}>
      <div ref={popoverRef as any} onClick={() => setSelectedTaskHandler(task)}>
        <S.StyledListItem
          onMouseOver={setIsMoreVisibleTrue}
          onMouseLeave={setIsMoreVisibleHandler}
          isHighlighted={isHighlighted}
          isCompleted={task.completed}
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
          <TaskDate taskDate={task.date} />
          <TaskProject taskProjectId={task.projectId} />
          <S.LabelsWrapper>
            {task.labels.map((label: string) => (
              <S.LabelsItem>{label}</S.LabelsItem>
            ))}
          </S.LabelsWrapper>
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

export default withRouter(TasksListItem);
