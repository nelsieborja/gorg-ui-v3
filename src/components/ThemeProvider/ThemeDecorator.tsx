import React from 'react';
import { DecoratorFn } from '@storybook/react';

import THEME from './theme';
import ThemeProvider from './ThemeProvider';

const ThemeDecorator: DecoratorFn = storyFn => (
  <ThemeProvider theme={THEME}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
