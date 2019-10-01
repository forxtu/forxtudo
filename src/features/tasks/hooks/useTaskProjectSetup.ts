import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

const useTaskProjectSetup = () => {
  const [newProjectId, setNewProjectId] = useState("inbox");

  const {
    value: isTaskSetupProjectOpen,
    setFalse: seIsTaskSetupProjectOpenFalse,
    toggle: toggleIsTaskSetupProjectOpen
  } = useBoolean(false);

  const setProjectHandler = (value: string) => {
    setNewProjectId(value);
  };

  const onTaskSetupProjectConfirmHandler = () => {
    seIsTaskSetupProjectOpenFalse();
    setNewProjectId(newProjectId);
  };

  return {
    newProjectId,
    setNewProjectId,
    isTaskSetupProjectOpen,
    seIsTaskSetupProjectOpenFalse,
    toggleIsTaskSetupProjectOpen,
    setProjectHandler,
    onTaskSetupProjectConfirmHandler
  };
};

export default useTaskProjectSetup;
