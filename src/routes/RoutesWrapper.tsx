import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// components
import Home from "components/pages/Home";
import NotFoundPage from "components/pages/NotFoundPage";
import Auth from "features/auth/components";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  }
];

const PrivateRoute = ({ component: Component, user, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const RoutesWrapper = ({ user }: any) => (
  <>
    <Switch>
      {routes.map(({ path, component }: any, key) => (
        <PrivateRoute
          exact
          path={path}
          component={component}
          key={key}
          user={user}
        />
      ))}
      <Route exact path="/auth" component={Auth} />
      <Route component={NotFoundPage} />
    </Switch>
    <Switch>{user ? <Redirect exact from="/auth" to="/" /> : null}</Switch>
  </>
);

export default RoutesWrapper;
