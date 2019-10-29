import { system, Config, ResponsiveValue } from 'styled-system';

import { ThemeType } from 'theme';

export interface TextColorProps {
  /** Sets the text color, otherwise override the default one */
  textColor?: ResponsiveValue<keyof ThemeType['colors']>;
}

const config: Config = {
  textColor: {
    property: 'color',
    scale: 'colors'
  }
};

const textColor = system(config);

export default textColor;
