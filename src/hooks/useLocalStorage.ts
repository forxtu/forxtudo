import { useState } from "react";

const useLocalStorage = (key: string) => {
  const [item, setValue] = useState(() => window.localStorage.getItem(key));

  const setItem = (keyVal: string, itemVal: any) => {
    setValue(itemVal);
    window.localStorage.setItem(keyVal, itemVal);
  };

  const removeItem = (keyVal: string) => {
    setValue(null);
    window.localStorage.removeItem(keyVal);
  };

  return { item, setItem, removeItem };
};

export default useLocalStorage;
