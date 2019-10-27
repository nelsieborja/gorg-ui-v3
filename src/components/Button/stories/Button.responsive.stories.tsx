import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';

export default {
  title: 'UI|Button'
};

export const Responsive = () => (
  <Button variant={['default', 'primary', 'secondary']} onClick={action('onClick')}>
    Resize viewport to see variant change in action
  </Button>
);
