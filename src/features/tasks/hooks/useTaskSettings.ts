import { useState } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

const useTaskSettings = () => {
  const { projectsStore } = useStores();
  const [selectedProject, setSelectedProject] = useState();

  const {
    value: isTaskSettingsOpen,
    setFalse: setIsTaskSettingsOpenFalse,
    toggle: setIsTaskSettingsOpen
  } = useBoolean(false);

  const onTaskSettingsCancelHandler = () => {
    setIsTaskSettingsOpenFalse();
    setSelectedProject(null);
  };

  const onTaskSettingsConfirmHandler = () => {
    setIsTaskSettingsOpenFalse();
    setSelectedProject(selectedProject);
  };

  const setProjectHandler = (value: string) => {
    setSelectedProject(value);
  };

  return {
    allProjects: projectsStore.allProjects,
    setProjectHandler,
    selectedProject,
    isTaskSettingsOpen,
    setIsTaskSettingsOpen,
    onTaskSettingsCancelHandler,
    onTaskSettingsConfirmHandler
  };
};

export default useTaskSettings;
