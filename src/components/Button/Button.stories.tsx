import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Button from '.';

export default {
  title: 'UI|Button',
  component: Button
};

export const buttons = () => (
  <>
    <Button onClick={action('Clicked Default')}>{text('Default', 'Default')}</Button>

    <Button variant="primary" onClick={action('Clicked Primary')}>
      {text('Primary', 'Primary')}
    </Button>

    <Button variant="secondary" onClick={action('Clicked Secondary')}>
      {text('Secondary', 'Secondary')}
    </Button>
  </>
);

export const variant = () => (
  <>
    <Button onClick={action('Clicked Default')}>{text('Default', 'Default')}</Button>

    <Button variant="primary" onClick={action('Clicked Primary')}>
      {text('Primary', 'Primary')}
    </Button>

    <Button variant="secondary" onClick={action('Clicked Secondary')}>
      {text('Secondary', 'Secondary')}
    </Button>
  </>
);

export const responsive = () => (
  <Button variant={['default', 'primary', 'secondary']} onClick={action('onClick')}>
    Resize viewport to see variant change in action
  </Button>
);
