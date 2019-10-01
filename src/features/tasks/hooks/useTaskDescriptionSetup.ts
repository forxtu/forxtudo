import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

const useTaskSetupDescriptionSetup = () => {
  const [taskDescription, setTaskDescription] = useState("");

  const {
    value: isTaskSetupDescriptionOpen,
    setFalse: setIsTaskSetupDescriptionOpenFalse,
    toggle: toggleIsTaskSetupDescriptionOpen
  } = useBoolean(false);

  const onTaskDescriptionCancelHandler = () => {
    setIsTaskSetupDescriptionOpenFalse();
    setTaskDescription("");
  };

  const onTaskDescriptionConfirmHandler = () => {
    setIsTaskSetupDescriptionOpenFalse();
    setTaskDescription(taskDescription);
  };

  const setTaskDescriptionHandler = (value: string) => {
    setTaskDescription(value);
  };

  return {
    taskDescription,
    setTaskDescription,
    isTaskSetupDescriptionOpen,
    toggleIsTaskSetupDescriptionOpen,
    onTaskDescriptionCancelHandler,
    onTaskDescriptionConfirmHandler,
    setTaskDescriptionHandler
  };
};

export default useTaskSetupDescriptionSetup;
