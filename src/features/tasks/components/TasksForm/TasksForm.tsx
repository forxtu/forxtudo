import React, { HTMLProps, ChangeEvent } from "react";
import { Button } from "antd";

// hooks
import useBoolean from "hooks/useBoolean";
import useTaskControls from "features/tasks/hooks/useTaskControls";
import useTaskSettings from "features/tasks/hooks/useTaskSettings";

// components
import TasksFormSettings from "features/tasks/components/TasksFormSettings";

// styles
import * as S from "features/tasks/styles/tasksStyles";

interface TasksForm extends HTMLProps<HTMLFormElement> {
  taskValue: string;
  setTaskValue: (event: ChangeEvent<HTMLInputElement>) => void;
  addTask: (event: any, newProjectId?: string) => void;
}

const TasksForm = ({ setTaskValue, taskValue, addTask }: TasksForm) => {
  const {
    isEditModeOpen,
    setIsEditModeOpenTrue,
    setIsEditModeOpenFalse
  } = useTaskControls();

  const taskSettings = useTaskSettings();

  const {
    setProjectHandler,
    selectedProject,
    onTaskSettingsCancelHandler,
    onTaskSettingsConfirmHandler,
    setIsTaskSettingsOpen,
    isTaskSettingsOpen
  } = taskSettings;

  const onAddTaskHandler = (e: any) => {
    addTask(e, selectedProject);
    onTaskSettingsCancelHandler();
  };

  const onCancelAddTaskHandler = (e: any) => {
    onTaskSettingsCancelHandler();
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
          />
          <S.Controls>
            <S.ControlsButtons>
              <S.TaskFormButton
                type="primary"
                onClick={(e: any) => onAddTaskHandler(e)}
              >
                Create
              </S.TaskFormButton>
              <Button onClick={onCancelAddTaskHandler}>Cancel</Button>
            </S.ControlsButtons>
            <TasksFormSettings
              setProject={setProjectHandler}
              setIsTaskSettingsOpen={setIsTaskSettingsOpen}
              onTaskSettingsCancel={onTaskSettingsCancelHandler}
              onTaskSettingsConfirm={onTaskSettingsConfirmHandler}
              isTaskSettingsOpen={isTaskSettingsOpen}
              selectedProject={selectedProject}
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
