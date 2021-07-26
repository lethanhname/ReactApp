import React from 'react';
import { routes } from './router-config';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
export default function App() {
  return (
    <React.Fragment>
      <Switch>
              {/*The routes array is used here and is iterated through to build the different routes needed for the app*/}
          {routes.map((route,index) => (
              <Route key={index} path={route.path} component={route.component} exact={route.exact} />
          ))}
          <Route component={Home} />
      </Switch>
    </React.Fragment>
      
  );
}