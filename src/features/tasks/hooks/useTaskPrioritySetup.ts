import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

const useTaskPrioritySetup = () => {
  const [taskPriority, setTaskPriority] = useState(0);

  const {
    value: isTaskSetupPriorityOpen,
    setFalse: setIsTaskSetupPriorityOpenFalse,
    toggle: toggleIsTaskSetupPriorityOpen
  } = useBoolean(false);

  const setTaskPriorityHandler = (value: number) => {
    setTaskPriority(value);
    setIsTaskSetupPriorityOpenFalse();
  };

  return {
    taskPriority,
    setTaskPriority,
    isTaskSetupPriorityOpen,
    toggleIsTaskSetupPriorityOpen,
    setTaskPriorityHandler
  };
};

export default useTaskPrioritySetup;
