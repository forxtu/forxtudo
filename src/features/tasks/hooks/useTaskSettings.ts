import { useState } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";

const useTaskSettings = () => {
  const { projectsStore } = useStores();
  const [selectedProject, setSelectedProject] = useState();
  const [selectedDate, setSelectedDate] = useState("");

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

  const setDateHandler = (date: string) => {
    setSelectedDate(date);
  };

  return {
    allProjects: projectsStore.allProjects,
    setProjectHandler,
    selectedProject,
    isTaskSettingsOpen,
    setIsTaskSettingsOpen,
    onTaskSettingsCancelHandler,
    onTaskSettingsConfirmHandler,
    selectedDate,
    setDateHandler
  };
};

export default useTaskSettings;
