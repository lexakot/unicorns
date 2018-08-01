import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

const CombinedProvider = ({ children, store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </Provider>
);

CombinedProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any.isRequired,
};

export default CombinedProvider;
