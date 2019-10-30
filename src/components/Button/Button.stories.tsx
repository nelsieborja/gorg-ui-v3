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
    <Button m={1} onClick={action('Clicked Default')}>
      {text('Default', 'Default')}
    </Button>
    <Button variant="primary" m={1} onClick={action('Clicked Primary')}>
      {text('Primary', 'Primary')}
    </Button>
    <Button variant="secondary" m={1} onClick={action('Clicked Secondary')}>
      {text('Secondary', 'Secondary')}
    </Button>

    <br />

    <Button m={1} onClick={action('Clicked Default')}>
      Default
    </Button>
    <Button variant="primary" shape="round" m={1} onClick={action('Clicked Round')}>
      Round
    </Button>
    <Button variant="secondary" shape="circle" m={1} onClick={action('Clicked Circle')}>
      Circle
    </Button>
  </>
);

export const variant = () => (
  <>
    <Button m={1}>Default</Button>
    <Button variant="primary" m={1}>
      Primary
    </Button>
    <Button variant="secondary" m={1}>
      Secondary
    </Button>
  </>
);

export const shape = () => (
  <>
    <Button m={1}>Default</Button>
    <Button shape="round" m={1}>
      Round
    </Button>
    <Button shape="circle" m={1}>
      Circle
    </Button>
  </>
);

export const responsive = () => (
  <Button variant={['default', 'primary', 'secondary']} onClick={action('onClick')}>
    Resize viewport to see variant change in action
  </Button>
);
