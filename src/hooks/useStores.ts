import { useContext } from "react";

import { StoreContext } from "store/StoreProvider";

const useStores = () => {
  const rootStore = useContext(StoreContext);
  if (!rootStore) {
    throw new Error("You have forgot to use StoreProvider, shame on you.");
  }
  return rootStore;
};

export default useStores;
