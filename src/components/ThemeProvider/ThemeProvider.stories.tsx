import React from 'react';

import ThemeProvider from '.';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider
};

const importLine = "import ThemeProvider, { ThemeType } from 'ThemeProvider';";
export const Default = () => <ThemeProvider>{importLine}</ThemeProvider>;
