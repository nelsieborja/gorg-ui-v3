import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import THEME, { ThemeType } from 'theme';

interface Props {
  theme?: ThemeType;
}

const GorgUIThemeProvider: React.FC<Props> = ({ children, theme = THEME }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url(${theme.fonts.url});
        ${emotionNormalize}

        html,
        body {
          font-size: 14px;
          font-family: ${theme.fonts.family};
        }
      `}
    />
    {children}
  </ThemeProvider>
);

export default GorgUIThemeProvider;
