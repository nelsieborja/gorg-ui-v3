# 🦋 Gorg UI v3 [![CircleCI](https://circleci.com/gh/nelsieborja/gorg-ui-v3/tree/master.svg?style=shield)](https://circleci.com/gh/nelsieborja/gorg-ui-v3/tree/master) [![codecov](https://codecov.io/gh/nelsieborja/gorg-ui-v3/branch/master/graph/badge.svg)](https://codecov.io/gh/nelsieborja/gorg-ui-v3) [![Netlify Status](https://api.netlify.com/api/v1/badges/d088e964-3c0e-41dc-acd3-44730b45593e/deploy-status)](https://app.netlify.com/sites/gorg-ui-v3/deploys) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://gorg-ui-v3.netlify.com/)

This repo contains the base architecture of the project, while further development was moved to a private monorepo (for now). You might also like to checkout the [first](https://github.com/nelsieborja/gorg-ui) ever version of the project for prior updates.

- [x] TypeScript
- [x] Theming
- [x] Styled System
- [x] [Doc Update](https://github.com/nelsieborja/gorg-ui-v3#-docspage-setup)
- [x] ~~Structural Testing~~ [Automated Visual Testing](https://github.com/nelsieborja/gorg-ui-v3#-automated-visual-testing)
- [x] [CircleCI Setup](https://github.com/nelsieborja/gorg-ui-v3#circleci-setup)
- [x] [TypeScript ESLint Setup](https://github.com/nelsieborja/gorg-ui-v3#typescript-eslint-setup)
- [x] [Git Hooks](https://github.com/nelsieborja/gorg-ui-v3#git-hooks)

## ⚙️ Installation

1. Create the application:

   ```shell
   $ npx create-react-app gorg-ui-v3 --typescript
   ```

2. Add Storybook:

   ```shell
   $ cd gorg-ui-v3 && npx -p @storybook/cli sb init
   ```

3. Quickly check that all environments are working properly:

   ```shell
   # Run the test runner (Jest) in a terminal:
   $ yarn test

   # Start the component explorer on port 9009:
   $ yarn run storybook

   # Run the frontend app proper on port 3000:
   $ yarn start
   ```

4. Automated Testing via [StoryShots](https://www.npmjs.com/package/@storybook/addon-storyshots):

   Install the package and its types:

   ```shell
   $ yarn add -D @storybook/addon-storyshots @types/storybook__addon-storyshots
   ```

   Create a `src/storybook.test.js` file and put:

   ```js
   import initStoryshots from "@storybook/addon-storyshots";
   initStoryshots();
   ```

5. Configure the App for Jest (Component Story Format (CSF) version):

   Configure Jest to work with Webpack's `require.context()`:

   ```js
   // .storybook/config.js

   import { configure } from "@storybook/react";

   const req = require.context("../src/components", true, /\.stories\.js$/); // <- import all the stories at once
   configure(req, module);
   ```

   The above works only during the build with Webpack, polyfill this to work with Jest by first installing Macro (for CRA v2+):

   ```shell
   $ yarn add -D require-context.macro
   ```

   In the same file, import the Macro and run it in place of `require.context`:

   ```js
   import requireContext from "require-context.macro";

   // const req = require.context('../src/components', true, /\.stories\.js$/); <-- replaced
   const req = requireContext("../src/components", true, /\.stories\.js$/);
   ```

   StoryShots is dependent on `react-test-renderer`:

   ```shell
   $ yarn add -D react-test-renderer
   ```

6. Setting Up Addons - [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

   Install Addon Knobs:

   ```shell
   $ yarn add @storybook/addon-knobs
   ```

   Register Knobs in your `.storybook/addons.js` file:

   ```js
   import "@storybook/addon-actions/register";
   import "@storybook/addon-knobs/register";
   import "@storybook/addon-links/register";
   ```

   Usage:

   ```js
   import { withKnobs, text } from "@storybook/addon-knobs/react";
   import Button from "./Button";

   export default {
     title: "Button",
     component: Button,
     decorators: [withKnobs]
   };

   export const Default = () => (
     <Button>{text("children", "Simple Button")}</Button>
   );
   ```

7. Finishing up TypeScript Setup

   Add [custom Webpack config](https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode--default) by creating `.storybook/webpack.config.js` file and put:

   ```js
   module.exports = ({ config, mode }) => {
     config.module.rules.push({
       test: /\.(ts|tsx)$/,
       loader: require.resolve("babel-loader"),
       options: {
         presets: [["react-app", { flow: false, typescript: true }]]
       }
     });
     config.resolve.extensions.push(".ts", ".tsx");
     return config;
   };
   ```

   Make sure to add `babel-loader`:

   ```shell
   $ yarn add -D babel-loader
   ```

   Update extensions accordingly (from `.js` to `.ts|tsx`):

   `.storybook/config.js` => `.storybook/config.ts`

   `requireContext('../src/components', true, /\.stories\.js$/)` => `requireContext('../src/components', true, /\.stories\.tsx$/)`

### 🐛 Bug Fixes

#### TypeScript Issue(s)

> Could not find a declaration file for module '@storybook/addon-knobs/react'

```js
// BEFORE:
import { withKnobs, object } from "@storybook/addon-knobs/react";

// AFTER:
import { withKnobs, object } from "@storybook/addon-knobs";
```

#### Styled System Issue(s)

> Type '{ color?: ... }' is not assignable to type 'ButtonHTMLAttributes<HTMLButtonElement>'

```js
// FIX 1: Set styled component type to `any`:
const Button: any = styled("button") < ButtonProps > ``;

// Fix 2: Define custom prop `textColor` in place of `color`:
const textColor = system({
  textColor: {
    property: "color", // <-- CSS property
    scale: "colors" // <-- key reference in the `theme` object
  }
});
```

For Fix 2, make sure to do the same thing for prop `bg|backgroundColor` since this is also part of the built-in API `color`.

---

## 📄 [DocsPage](https://github.com/storybookjs/storybook/tree/next/addons/docs) Setup

1. Install DocsPage:
   ```shell
   $ yarn add -D @storybook/addon-docs
   ```
2. Create the file `.storybook/presets.js` and put:
   ```js
   module.exports = ["@storybook/addon-docs/react/preset"];
   ```
3. Install `react-docgen-typescript-loader`:

   ```shell
   $ yarn add -D react-docgen-typescript-loader
   ```

   May need to specify the `tsconfig` for the loader in case [props are not displaying](https://github.com/strothj/react-docgen-typescript-loader/issues/10#issuecomment-425688601):

   ```js
   // webpack.config.js

   config.module.rules.push({
     ...
     use: [
       {
         loader: require.resolve('react-docgen-typescript-loader'),
         options: {
           tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
         }
       }
     ]
   });
   ```

---

## 📸 [Automated Visual Testing](https://medium.com/better-programming/using-storybook-as-a-powerful-visual-testing-platform-3b71db953b4b)

Storybook tests UI visually via an add-on called `storyshot-puppeteer`:

> Same as `storyshots`, it works by comparing screenshots – only this time it takes screenshots of the browser and not code

### Quick Setup

1. Install `storyshot-puppeteer`:

   ```shell
   $  yarn add D @storybook/addon-storyshots-puppeteer
   ```

2. Update the test file `storybook.test.ts` to override the test comparison with `imageSnapshot` from the `puppeteer` add-on:

   ```js
   // storybook.test.ts

   import initStoryshots from "@storybook/addon-storyshots";
   import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

   initStoryshots({
     test: imageSnapshot({ storybookUrl: "http://localhost:9009/" })
   });
   ```

   Note that the tests now depend on having an instance of Storybook running, so make sure Storybook server is up and running before running the tests.

### Running on CI

Running two terminals (one for Storybook, another one for Testing) at the same time on CI environment is made possible by `start-server-and-test`.

1. Install it:

   ```shell
   $ yarn add start-server-and-test
   ```

2. Sample script:

   ```js
   // package.json

   "scripts": {
     "test": "react-scripts test --coverage",
     "storybook": "start-storybook -p 9009 -s public",
     "ci:test": "start-test storybook 9009 test",
   }
   ```

---

## CircleCI Setup

### [Collecting Jest Data](https://www.viget.com/articles/using-junit-on-circleci-2-0-with-jest-and-eslint/) via [Junit](https://github.com/jest-community/jest-junit) (CRA version)

1. Install `jest-junit`:

   ```shell
   $ yarn add -D jest-junit
   ```

2. Tell Junit to save the report output to a directory of your choice (`test-reports` in my case):

   ```js
   // package.json

   "jest-junit": {
     "outputDirectory": "test-reports"
   }
   ```

#### Sample command line (CRA version):

```shell
$ CI=true yarn run test:coverage -i --reporters=default --reporters=jest-junit
```
- `CI=true` - [force Jest to run tests once and finish the process](https://create-react-app.dev/docs/running-tests/#continuous-integration)
- `-i` - force Jest to use only the virtualized build environment within the virtual machine
- `--reporters=default --reporters=jest-junit` - tell Jest to generate a Junit report

#### More CircleCI required config:

```yml
# .circleci/config.yml

- store_artifacts:
    path: test-reports/ # upload the test result folder as an artifact
- store_test_results:
    path: test-reports/ # display test result in build summary section
```

### [Using Yarn in CircleCI](https://circleci.com/docs/2.0/yarn/)

---

## [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) Setup

1. Install the required dependencies:

   ```shell
   $ yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

2. Create the `.eslintrc` file and put:

   ```js
   {
     "parser": "@typescript-eslint/parser",
     "plugins": ["@typescript-eslint"]
   }
   ```

   In the same file, add the following recommended rules:

   ```js
   // .eslintrc

   {
     ...
     // Add this to avoid runtime error
     "parserOptions": {
       "project": "./tsconfig.json"
     },
     "extends": [
       // Rules which recommended for all projects by the ESLint Team
       "eslint:recommended",
       // Make all eslint rules compatible with TS
       "plugin:@typescript-eslint/eslint-recommended",
       "plugin:@typescript-eslint/recommended",
       // for type-checking to work properly with highly-valuable rules
       "plugin:@typescript-eslint/recommended-requiring-type-checking"
     ]
   }
   ```

### [Usage with Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

```shell
$ npx install-peerdeps --dev eslint-config-airbnb
```

```js
// .eslintrc

{
  ...
  "extends": [
    // ESLint rules, including ES6+ and React
    "airbnb",
    // Enable the linting rules for React hooks
    "airbnb/hooks",
    ...
  ],
}
```

### [Usage with Prettier](https://github.com/prettier/eslint-config-prettier)

```shell
$ yarn add -D eslint-config-prettier
```

```js
// .eslintrc

{
  ...
  "extends": [
    ...
    // Disable above code formatting related rules
    "prettier",
    // Required if a config uses a plugin to avoid conflict with Prettier
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
}
```

In case of Prettier not configured in a workspace, add `eslint-plugin-prettier` to enforce the formatter.

```shell
$ yarn add -D prettier eslint-plugin-prettier
```

```js
// .eslintrc

{
  ...
  "plugins": [..., "prettier"],
  "extends": [
    "prettier/react"
    "plugin:prettier/recommended"
  ],
  "prettier/prettier": [
      "error",
      {
        "no-var-keyword": true,
        "printWidth": 100,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 2
      }
    ]
}
```

---

### Git Hooks

1. Install the required dependencies:
    ``` shell
    $ yarn add -D husky lint-staged prettier pretty-quick
    ```

2. Sample config files:
    ```js
    // .huskyrc

    {
      "hooks": {
        "pre-commit": "pretty-quick --staged --verbose && lint-staged",
        "pre-push": "yarn run test:all"
      }
    }
    ```

    ```js
    // .lintstagedrc

    {
      "src/**/*.{js,ts,tsx}": [
        "eslint --fix",
        "git add"
      ]
    }
    ```