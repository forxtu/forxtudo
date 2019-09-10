import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// hooks
import useAuth from "features/auth/hooks/useAuth";

// utils
import RoutesWrapper from "routes/RoutesWrapper";

const App = () => {
  const { authUser } = useAuth();

  return (
    <Router>
      <RoutesWrapper user={authUser} />
    </Router>
  );
};

export default App;
