import React, { HTMLProps, ChangeEvent } from "react";
import { Button } from "antd";
import { Moment } from "moment";

// hooks
import { AddTaskArgs } from "features/tasks/hooks/useTasks";
import useTaskControls from "features/tasks/hooks/useTaskControls";
import useTaskSettings from "features/tasks/hooks/useTaskSettings";

// components
import TasksFormSettings from "features/tasks/components/TasksFormSettings";

// styles
import * as S from "features/tasks/styles/tasksStyles";

interface TasksForm extends HTMLProps<HTMLFormElement> {
  taskValue: string;
  globalSelectedProjectId: string;
  setTaskValue: (event: ChangeEvent<HTMLInputElement>) => void;
  resetTaskValue: () => void;
  addTask: ({ projectId, date, description }: AddTaskArgs) => void;
}

const TasksForm = ({
  setTaskValue,
  taskValue,
  resetTaskValue,
  addTask,
  globalSelectedProjectId
}: TasksForm) => {
  const {
    isEditModeOpen,
    setIsEditModeOpenTrue,
    setIsEditModeOpenFalse
  } = useTaskControls();

  const taskSettings = useTaskSettings();

  const { resetTaskSetup } = taskSettings;

  const {
    selectedDate,
    selectedDateObject,
    setDateHandler
  } = taskSettings.taskDateSetup;
  const { newProjectId } = taskSettings.taskProjectSetup;
  const { taskPriority } = taskSettings.taskPrioritiesSetup;
  const { taskDescription } = taskSettings.taskDescriptionSetup;

  const onAddTaskHandler = () => {
    addTask({
      projectId: newProjectId,
      date: selectedDate,
      description: taskDescription,
      priority: taskPriority
    });
    resetTaskSetup();
    resetTaskValue();
  };

  const onCancelAddTaskHandler = () => {
    resetTaskSetup();
    resetTaskValue();
    setIsEditModeOpenFalse();
  };

  return (
    <div>
      {isEditModeOpen ? (
        <S.Wrapper>
          <S.TaskInput
            placeholder="Type something..."
            onChange={setTaskValue}
            value={taskValue}
            addonAfter={
              <S.StyledDatePicker
                value={selectedDateObject as Moment & null & undefined}
                onChange={(date: Moment | null, dateString) =>
                  setDateHandler(date, dateString)
                }
              />
            }
          />
          <S.Controls>
            <S.ControlsButtons>
              <S.TaskFormButton type="primary" onClick={onAddTaskHandler}>
                Create
              </S.TaskFormButton>
              <Button onClick={onCancelAddTaskHandler}>Cancel</Button>
            </S.ControlsButtons>
            <TasksFormSettings
              globalSelectedProjectId={globalSelectedProjectId}
              taskSettings={taskSettings}
            />
          </S.Controls>
        </S.Wrapper>
      ) : (
        <Button
          onClick={setIsEditModeOpenTrue}
          type="primary"
          icon="plus"
          size="default"
          shape="round"
        >
          Add task
        </Button>
      )}
    </div>
  );
};

export default TasksForm;
