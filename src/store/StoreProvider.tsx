import React, { createContext, useContext } from "react";

// utils
import RootStore from "store/RootStore";
import { UserContext } from "containers/core/App";

export const StoreContext = createContext<any>(null);

const StoreProvider = ({ children }: any) => {
  const { user } = useContext(UserContext);
  const store = new RootStore(user);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
