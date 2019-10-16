import { useState, useEffect } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

const useTaskProjectSetup = (globalSelectedProjectId?: string) => {
  const [newProjectId, setNewProjectId] = useState(globalSelectedProjectId);

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

  useEffect(() => {
    setNewProjectId(globalSelectedProjectId);
  }, [globalSelectedProjectId]);

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
