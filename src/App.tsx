import React from "react";
import NavbarComponent from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
