import React, { useEffect } from "react";

// hooks
import useTaskSettings from "features/tasks/hooks/useTaskSettings";

// components
import TaskSetupProject from "features/tasks/components/TasksFormSettings/TaskSetupProject";
import TaskSetupDescription from "features/tasks/components/TasksFormSettings/TaskSetupDescription";

// styles
import * as S from "features/tasks/components/TasksFormSettings/tasksFormSettingsStyles";

type TasksFormSettings = {
  taskSettings: any;
  newProjectId: string;
  globalSelectedProjectId?: string;
  onTaskSetupProjectConfirm: () => void;
};

const TasksFormSettings = ({
  taskSettings,
  newProjectId,
  onTaskSetupProjectConfirm
}: TasksFormSettings) => {
  const { allProjects } = useTaskSettings();

  useEffect(() => {
    onTaskSetupProjectConfirm();
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
        <TaskSetupDescription taskSettings={taskSettings} />
      </S.ControlItem>
    </S.ControlSelections>
  );
};

export default TasksFormSettings;
