import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import App from './containers/App';
import Welcome from './containers/Welcome';

export const routes = [
  {
    path: '/',
    component: App,
    exact: true,
    pageName: 'App',
  },
  {
    path: '/tick',
    component: Welcome,
    exact: true,
    pageName: 'Welcome',
  }
];

export default () => (
  <Switch>
    {
      routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))
    }
  </Switch>
);
