// hooks
import useBoolean from "hooks/useBoolean";

const useItemMore = () => {
  const {
    value: isMoreVisible,
    toggle: setIsMoreVisibleToggle,
    setTrue: setIsMoreVisibleTrue,
    setFalse: setIsMoreVisibleFalse
  } = useBoolean(false);
  const {
    value: isMoreOpen,
    toggle: setIsMoreOpenToggle,
    setFalse: setIsMoreOpenFalse
  } = useBoolean(false);

  const setIsMoreVisibleHandler = () => {
    if (!isMoreOpen) {
      setIsMoreOpenFalse();
      setIsMoreVisibleFalse();
    }
  };

  return {
    isMoreVisible,
    setIsMoreVisibleToggle,
    setIsMoreVisibleTrue,
    setIsMoreVisibleFalse,
    setIsMoreVisibleHandler,
    isMoreOpen,
    setIsMoreOpenToggle,
    setIsMoreOpenFalse
  };
};

export default useItemMore;
