import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../core/theme';

import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';

export default function withLayout(Component) {
  function WithLayout(props) {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppAppBar />
        <Component {...props} />
        <AppFooter />
      </ThemeProvider>
    );
  }

  return WithLayout;
}
