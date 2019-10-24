import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);

    expect(div.querySelector('button')).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
  });
});
