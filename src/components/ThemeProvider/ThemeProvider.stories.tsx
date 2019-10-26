import React from 'react';

import THEME from './theme';
import ThemeProvider from '.';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider
};

const importLine = "import ThemeProvider, { ThemeInterface } from 'ThemeProvider';";
export const Default = () => <ThemeProvider theme={THEME}>{importLine}</ThemeProvider>;
