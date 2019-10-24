import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
// configure(require.context('../src/components', true, /\.stories\.js$/), module);

const req = requireContext('../src/components', true, /\.stories\.tsx$/);

configure(req, module);
