import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

export type Priority = {
  name: string;
  level: number;
  color: string;
};

const useTaskPrioritySetup = () => {
  const [taskPriority, setTaskPriority] = useState(0);

  const priorities: Priority[] = [
    { name: "None", level: 0, color: "gray" },
    { name: "Low", level: 1, color: "blue" },
    { name: "Medium", level: 2, color: "orange" },
    { name: "High", level: 3, color: "red" }
  ];

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
    priorities,
    taskPriority,
    setTaskPriority,
    isTaskSetupPriorityOpen,
    toggleIsTaskSetupPriorityOpen,
    setTaskPriorityHandler
  };
};

export default useTaskPrioritySetup;
