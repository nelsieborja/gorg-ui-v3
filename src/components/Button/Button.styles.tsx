import { styled } from '@storybook/theming';
import { compose, layout, space, typography, variant } from 'styled-system';
import backgroundColor from 'styled-system/backgroundColor';
import textColor from 'styled-system/textColor';

import ButtonProps, { VariantEnum } from './Button.interface';

// import { themeGet } from '@styled-system/theme-get';
// font-size: ${themeGet('fontSize.3', '14px')};

const Button = styled('button')<ButtonProps>(
  // props => ({
  //   color: props.color
  // }),
  {
    borderWidth: 1,
    borderColor: 'transparent',
    cursor: 'pointer',
    transition: '.3s'
  },
  variant({
    scale: 'buttons',
    variants: {
      default: {
        color: 'black',
        bg: 'lightBlue2',
        '&:hover': {
          bg: 'lightBlue3'
        }
      },
      primary: {
        color: 'white',
        bg: 'black2',
        '&:hover': {
          bg: 'black3'
        }
      },
      secondary: {
        color: 'white',
        bg: 'blue2',
        '&:hover': {
          bg: 'blue3'
        }
      }
    }
  }),
  compose(
    backgroundColor,
    textColor,
    layout,
    space,
    typography
  )
);

Button.defaultProps = {
  p: 3,
  variant: VariantEnum.default
};

export default Button;
