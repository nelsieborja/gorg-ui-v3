import React from 'react';

import ThemeProvider from '.';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider
};

export const basic = () => <ThemeProvider />;
basic.story = {
  name: 'Basic Usage'
};
