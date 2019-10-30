import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from '../ThemeProvider';
import Button from './Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Button />
      </ThemeProvider>,
      div
    );

    expect(div.querySelector('button')).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
  });
});
