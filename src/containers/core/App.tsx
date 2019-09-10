import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// hooks
import useAuth from "features/auth/hooks/useAuth";

// utils
import RoutesWrapper from "routes/RoutesWrapper";
import light from "styles/themes/light";

// styles
import GlobalStyles from "styles/globalStyles";

const App = () => {
  const { authUser } = useAuth();

  return (
    <Router>
      <GlobalStyles />
      <StyledThemeProvider theme={light}>
        <RoutesWrapper user={authUser} />
      </StyledThemeProvider>
    </Router>
  );
};

export default App;
