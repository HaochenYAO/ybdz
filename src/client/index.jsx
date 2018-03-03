import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Immutable from 'immutable';

import configureStore from './store/configureStore';
import reducer from './reducers';
import Root from './root';

const initialState = Immutable.fromJS(window.PRELOADED_STATE);
const storeParam = [
  reducer,
  initialState,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
];

const store = configureStore(...storeParam);
const rootElement = document.getElementById('root');

function renderApp() {
  render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    rootElement,
  );
}

window.onload = () => {
  try {
    renderApp();
  } catch (e) {
    console.log(e);
  }

  if (module.hot) {
    module.hot.accept('./root', () => {
      // eslint-disable-next-line global-require
      const NextRoot = require('./root').default;
      render(
        <AppContainer>
          <NextRoot store={store} />
        </AppContainer>,
        rootElement,
      );
    });
  }
};
