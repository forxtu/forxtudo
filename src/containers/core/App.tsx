import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// hooks
import useAuth from "features/auth/hooks/useAuth";

// utils
import RoutesWrapper from "routes/RoutesWrapper";
import light from "styles/themes/light";

// styles
import GlobalStyles from "styles/globalStyles";

export const UserContext = createContext({ user: null });

const App = () => {
  const { authUser } = useAuth();

  return (
    <Router>
      <GlobalStyles />
      <UserContext.Provider value={{ user: authUser } as any}>
        <StyledThemeProvider theme={light}>
          <RoutesWrapper user={authUser} />
        </StyledThemeProvider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
