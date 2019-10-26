import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import ThemeDecorator from '../src/components/ThemeProvider/ThemeDecorator';

const req = requireContext('../src/components', true, /\.stories\.tsx$/);

addDecorator(ThemeDecorator);
configure(req, module);
