import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '..';

export default {
  title: 'UI|Button/Variant',
  decorators: [withKnobs]
};

export const Default = () => (
  <Button onClick={action('onClick color="default"')}>{text('children', 'Default Button')}</Button>
);

export const primary = () => (
  <Button variant="primary" onClick={action('onClick color="primary"')}>
    {text('children', 'Primary Button')}
  </Button>
);

export const secondary = () => (
  <Button variant="secondary" onClick={action('onClick color="secondary"')}>
    {text('children', 'Secondary Button')}
  </Button>
);
