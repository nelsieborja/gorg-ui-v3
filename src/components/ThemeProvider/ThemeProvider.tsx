import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import ThemeType from './theme.interface';

interface Props {
  theme: ThemeType;
}

const GorgUIThemeProvider: React.FC<Props> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url(${theme.fonts.url});
        ${emotionNormalize}

        html,
        body {
          font-size: ${theme.fontSizes[3]}px;
          font-family: ${theme.fonts.family};
        }
      `}
    />
    {children}
  </ThemeProvider>
);

export default GorgUIThemeProvider;
