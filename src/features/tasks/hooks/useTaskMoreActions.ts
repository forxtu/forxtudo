import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";
import useStores from "hooks/useStores";

// utils
import { Task } from "features/tasks/store/TasksStore";

const useTaskMoreActions = () => {
  const { projectsStore, tasksStore } = useStores();

  const {
    value: isMoveToProjectOpen,
    setFalse: setIsMoveToProjectOpenFalse,
    toggle: toggleIsMoveToProjectOpen
  } = useBoolean(false);

  const moveTaskToProjectHandler = (task: Task, projectId: string) => {
    tasksStore.moveTaskToProject(task, projectId);
  };

  return {
    allProjects: projectsStore.allProjects,
    globalSelectedProjectId: projectsStore.selectedProjectId,
    isMoveToProjectOpen,
    toggleIsMoveToProjectOpen,
    moveTaskToProjectHandler
  };
};

export default useTaskMoreActions;
