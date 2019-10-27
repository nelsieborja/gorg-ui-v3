import { system, Config, ResponsiveValue } from 'styled-system';

import { ThemeType } from 'theme';

export interface BackgroundColorProps {
  backgroundColor?: ResponsiveValue<keyof ThemeType['colors']>;
  bg?: ResponsiveValue<keyof ThemeType['colors']>;
}

const config: Config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  }
};
config.bg = config.backgroundColor;

const backgroundColor = system(config);

export default backgroundColor;
