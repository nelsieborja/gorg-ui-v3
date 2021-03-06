import { system, Config, ResponsiveValue } from 'styled-system';

import { ThemeType } from 'theme';

export interface BackgroundColorProps {
  /** Sets the background color, otherwise override the default one (verbose) */
  backgroundColor?: ResponsiveValue<keyof ThemeType['colors']>;
  /** Sets the background color, otherwise override the default one */
  bg?: ResponsiveValue<keyof ThemeType['colors']>;
}

const config: Config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};
config.bg = config.backgroundColor;

const backgroundColor = system(config);

export default backgroundColor;
