import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './Routes';

export default class Root extends PureComponent {
  static defaultProps = {
    store: {},
  }

  static propTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func,
    }),
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
