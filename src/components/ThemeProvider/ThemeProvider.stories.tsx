import React from 'react';
import { StoriesFC } from '../../../.storybook/types';

import ThemeProvider from '.';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
};

export const basic: StoriesFC = () => <ThemeProvider />;
basic.story = {
  name: 'Basic Usage',
};
