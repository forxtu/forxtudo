import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "antd/dist/antd.css";

// hooks
import useAuth from "features/auth/hooks/useAuth";

// utils
import RoutesWrapper from "routes/RoutesWrapper";
import light from "styles/themes/light";
import StoreProvider from "store/StoreProvider";

// styles
import GlobalStyles from "styles/globalStyles";

type UserContext = {
  user: null | string;
};

export const UserContext = createContext<UserContext>({ user: null });

const App = () => {
  const { authUser } = useAuth();

  return (
    <Router>
      <GlobalStyles />
      <UserContext.Provider value={{ user: authUser } as any}>
        <StoreProvider>
          <StyledThemeProvider theme={light}>
            <RoutesWrapper user={authUser} />
          </StyledThemeProvider>
        </StoreProvider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
