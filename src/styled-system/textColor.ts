import { system, Config, ResponsiveValue } from 'styled-system';

import { ThemeType } from 'theme';

export interface TextColorProps {
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
