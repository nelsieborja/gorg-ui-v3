# 🦋 Gorg UI v3

You might also like to checkout the [first](https://github.com/nelsieborja/gorg-ui) ever version of the project for prior updates.

- [x] TypeScript
- [x] Theming
- [x] Styled System
- [ ] Doc Update
- [ ] +more ...

## ⚙️Installation

1. Create the application:

   ```shell
   npx create-react-app gorg-ui-v3 --typescript
   ```

2. Add Storybook:

   ```shell
   cd gorg-ui-v3
   npx -p @storybook/cli sb init
   ```

3. Quickly check that all environments are working properly:

   ```shell
   # Run the test runner (Jest) in a terminal:
   yarn test

   # Start the component explorer on port 9009:
   yarn run storybook

   # Run the frontend app proper on port 3000:
   yarn start
   ```

4. Automated Testing via [StoryShots](https://www.npmjs.com/package/@storybook/addon-storyshots):

   ```shell
   yarn add -D @storybook/addon-storyshots
   ```

   Then create an `src/storybook.test.js` file with the following in it:

   ```js
   import initStoryshots from '@storybook/addon-storyshots';
   initStoryshots();
   ```

5. Configure the App for Jest (Component Story Format (CSF) version):

   Configure Jest to work with Webpack's `require.context()`:

   ```js
   // .storybook/config.js
   import { configure } from '@storybook/react';

   const req = require.context('../src/components', true, /\.stories\.js$/); // <- import all the stories at once
   configure(req, module);
   ```

   The above works only during the build with Webpack, polyfill this to work with Jest by first installing Macro (for CRA v2+):

   ```shell
   yarn add -D require-context.macro
   ```

   Import the Macro and run it in place of `require.context`:

   ```js
   import requireContext from 'require-context.macro';

   // const req = require.context('../src/components', true, /\.stories\.js$/); <-- replaced
   const req = requireContext('../src/components', true, /\.stories\.js$/);
   ```

   Finally, configure Jest for React since StoryShots is dependent on `react-test-renderer` , but doesn't install it:

   ```shell
   yarn add -D react-test-renderer
   ```

6. Setting Up Addons - [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

   Install Addon Knobs:

   ```shell
   yarn add @storybook/addon-knobs
   ```

   Register Knobs in your `.storybook/addons.js` file:

   ```js
   import '@storybook/addon-actions/register';
   import '@storybook/addon-knobs/register';
   import '@storybook/addon-links/register';
   ```

   Usage:

   ```js
   import { withKnobs, text } from '@storybook/addon-knobs/react';
   import Button from './Button';

   export default {
     title: 'Button',
     component: Button,
     decorators: [withKnobs]
   };

   export const Default = () => <Button>{text('children', 'Simple Button')}</Button>;
   ```

7. Finishing up TypeScript Setup

   Add [custom Webpack config](https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode--default) by creating `.storybook/webpack.config.js` file with the following in it:

   ```js
   module.exports = ({ config, mode }) => {
     config.module.rules.push({
       test: /\.(ts|tsx)$/,
       loader: require.resolve('babel-loader'),
       options: {
         presets: [['react-app', { flow: false, typescript: true }]]
       }
     });
     config.resolve.extensions.push('.ts', '.tsx');
     return config;
   };
   ```

   Make sure to add `babel-loader`:

   ```shell
   yarn add -D babel-loader
   ```

   Update extensions accordingly (from `.js` to `.ts|tsx`):

   `.storybook/config.js` => `.storybook/config.ts`

   `requireContext('../src/components', true, /\.stories\.js$/)` => `requireContext('../src/components', true, /\.stories\.tsx$/)`

## 🐛Bug Fixes

### TypeScript Issue(s)

> Could not find a declaration file for module '@storybook/addon-knobs/react'

```js
// BEFORE:
import { withKnobs, object } from '@storybook/addon-knobs/react';

// AFTER:
import { withKnobs, object } from '@storybook/addon-knobs';
```

### Styled System Issue(s)

> Type '{ color?: ... }' is not assignable to type 'ButtonHTMLAttributes<HTMLButtonElement>'

```js
// FIX 1: Set styled component type to `any`:
const Button: any = styled('button') < ButtonProps > ``;

// Fix 2: Define custom prop `textColor` in place of `color`:
const textColor = system({
  textColor: {
    property: 'color', // <-- CSS property
    scale: 'colors' // <-- key reference in the `theme` object
  }
});
```

For Fix 2, make sure to do the same thing for prop `bg|backgroundColor` since this is also part of the built-in API `color`.
