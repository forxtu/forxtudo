// hooks
import useBoolean from "hooks/useBoolean";

const useTaskControls = () => {
  const {
    value: isEditModeOpen,
    setTrue: setIsEditModeOpenTrue,
    setFalse: setIsEditModeOpenFalse
  } = useBoolean(false);

  return {
    isEditModeOpen,
    setIsEditModeOpenTrue,
    setIsEditModeOpenFalse
  };
};

export default useTaskControls;
