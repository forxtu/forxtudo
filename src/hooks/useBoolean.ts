import { useState, useCallback } from "react";

const useBoolean = (initial: boolean) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    toggle: useCallback(() => setValue(val => !val), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), [])
  };
};

export default useBoolean;
