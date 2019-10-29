import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
// import centered from '@storybook/addon-centered/react';
import requireContext from 'require-context.macro';

import storybookTheme from '../src/theme/storybookTheme';
import ThemeDecorator from '../src/components/ThemeProvider/ThemeDecorator';

addParameters({
  options: storybookTheme
});

addDecorator(withKnobs);
addDecorator(withA11y);
// ISSUE REF: https://github.com/storybookjs/storybook/issues/8128
// addDecorator(centered);
addDecorator(ThemeDecorator);

const req = requireContext('../src/components', true, /\.stories\.tsx$/);
configure(req, module);
