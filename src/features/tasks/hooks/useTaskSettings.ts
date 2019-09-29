import { useState } from "react";

// hooks
import useStores from "hooks/useStores";
import useBoolean from "hooks/useBoolean";
import useTaskDescription from "features/tasks/hooks/useTaskDescription";

const useTaskSettings = () => {
  const { projectsStore } = useStores();
  const [newProjectId, setNewProjectId] = useState("inbox");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateObject, setSelectedDateObject] = useState(null);

  const {
    taskDescription,
    setTaskDescription,
    isTaskSetupDescriptionOpen,
    toggleIsTaskSetupDescriptionOpen,
    onTaskDescriptionCancelHandler,
    onTaskDescriptionConfirmHandler,
    setTaskDescriptionHandler
  } = useTaskDescription();

  const {
    value: isTaskSetupProjectOpen,
    setFalse: seIsTaskSetupProjectOpenFalse,
    toggle: toggleIsTaskSetupProjectOpen
  } = useBoolean(false);

  const resetTaskSetup = () => {
    seIsTaskSetupProjectOpenFalse();
    setNewProjectId("inbox");
    setTaskDescription("");
    setSelectedDate("");
    setSelectedDateObject(null);
  };

  const onTaskSetupProjectConfirmHandler = () => {
    seIsTaskSetupProjectOpenFalse();
    setNewProjectId(newProjectId);
  };

  const setProjectHandler = (value: string) => {
    setNewProjectId(value);
  };

  const setDateHandler = (dateObject: any, date: string) => {
    setSelectedDate(date);
    setSelectedDateObject(dateObject);
  };

  return {
    allProjects: projectsStore.allProjects,
    setProjectHandler,
    newProjectId,
    isTaskSetupProjectOpen,
    toggleIsTaskSetupProjectOpen,
    resetTaskSetup,
    onTaskSetupProjectConfirmHandler,
    selectedDate,
    selectedDateObject,
    setDateHandler,
    taskDescription,
    isTaskSetupDescriptionOpen,
    toggleIsTaskSetupDescriptionOpen,
    onTaskDescriptionCancelHandler,
    onTaskDescriptionConfirmHandler,
    setTaskDescriptionHandler
  };
};

export default useTaskSettings;
