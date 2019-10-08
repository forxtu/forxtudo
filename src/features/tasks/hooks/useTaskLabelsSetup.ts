import { useState } from "react";

// hooks
import useBoolean from "hooks/useBoolean";

// utils
import { Label } from "features/labels/store/LabelsStore";

const useTaskLabelsSetup = () => {
  const [taskLabels, setTaskLabels] = useState<Label[]>([]);

  const {
    value: isTaskSetupLabelsOpen,
    setFalse: seIsTaskSetupLabelsOpenFalse,
    toggle: toggleIsTaskSetupLabelsOpen
  } = useBoolean(false);

  const setTaskLabelsHandler = (newLabels: Label[]) => {
    setTaskLabels(newLabels);
  };

  return {
    taskLabels,
    setTaskLabels,
    setTaskLabelsHandler,
    isTaskSetupLabelsOpen,
    toggleIsTaskSetupLabelsOpen
  };
};

export default useTaskLabelsSetup;
