import React from 'react';
import { DecoratorFn } from '@storybook/react';

import ThemeProvider from './ThemeProvider';

const ThemeDecorator: DecoratorFn = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
