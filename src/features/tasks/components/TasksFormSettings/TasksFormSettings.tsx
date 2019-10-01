import React, { useEffect } from "react";

// hooks
import useTaskSettings from "features/tasks/hooks/useTaskSettings";

// components
import TaskSetupProject from "features/tasks/components/TasksFormSettings/TaskSetupProject";
import TaskSetupDescription from "features/tasks/components/TasksFormSettings/TaskSetupDescription";
import TaskSetupPriority from "features/tasks/components/TasksFormSettings/TaskSetupPriority";

// styles
import * as S from "features/tasks/components/TasksFormSettings/tasksFormSettingsStyles";

type TasksFormSettings = {
  taskSettings: any;
  globalSelectedProjectId?: string;
};

const TasksFormSettings = ({ taskSettings }: TasksFormSettings) => {
  const { allProjects } = useTaskSettings();
  const {
    onTaskSetupProjectConfirmHandler,
    newProjectId
  } = taskSettings.taskProjectSetup;

  useEffect(() => {
    onTaskSetupProjectConfirmHandler();
  }, [newProjectId]);

  return (
    <S.ControlSelections>
      <S.ControlItem>
        <TaskSetupProject
          taskSettings={taskSettings}
          allProjects={allProjects}
        />
      </S.ControlItem>
      <S.ControlItem>
        <TaskSetupPriority taskSettings={taskSettings} />
      </S.ControlItem>
      <S.ControlItem>
        <TaskSetupDescription taskSettings={taskSettings} />
      </S.ControlItem>
    </S.ControlSelections>
  );
};

export default TasksFormSettings;
