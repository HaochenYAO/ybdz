import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import WelcomeApp from './containers/WelcomeApp';
import TickApp from './containers/TickApp';
import TodoApp from './containers/TodoApp';
import PermisApp from './containers/PermisApp';
import RedditApp from './containers/RedditApp';

export const routes = [
  {
    path: '/',
    component: WelcomeApp,
    exact: true,
    pageName: 'WelcomeApp',
  },
  {
    path: '/todo',
    component: TodoApp,
    exact: true,
    pageName: 'TodoApp',
  },
  {
    path: '/tick/:name',
    component: TickApp,
    exact: true,
    pageName: 'TickApp',
  },
  {
    path: '/permis',
    component: PermisApp,
    exact: true,
    pageName: 'PermisApp',
  },
  {
    path: '/reddit',
    component: RedditApp,
    exact: true,
    pageName: 'RedditApp',
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
