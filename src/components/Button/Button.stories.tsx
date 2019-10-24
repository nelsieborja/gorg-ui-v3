import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'UI|Button',
  component: Button,
  decorators: [withKnobs]
};

export const Default = () => (
  <Button onClick={action('onClick')}>{text('children', 'Simple Button')}</Button>
);
