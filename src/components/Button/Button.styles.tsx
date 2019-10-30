import { styled } from '@storybook/theming';
import { layout, space, typography, variant } from 'styled-system';
import backgroundColor from 'styled-system/backgroundColor';
import textColor from 'styled-system/textColor';

import ButtonProps from './Button.interface';

const Button = styled('button')<ButtonProps>`
  cursor: pointer;
  border: 0;
  transition: 150ms ease-out 0s;

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: ${props => props.theme.shadows.base};
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }

  ${variant({
    scale: 'buttons',
    variants: {
      default: {
        color: 'black',
        bg: 'default.bg',
        '&:hover': {
          bg: 'default.hover'
        },
        '&:focus': {
          boxShadow: 'default.focus'
        },
        '&:focus:hover': {
          boxShadow: 'default.focusHover'
        }
      },
      primary: {
        color: 'white',
        bg: 'primary.bg',
        '&:hover': {
          bg: 'primary.hover'
        },
        '&:focus': {
          boxShadow: 'primaryFocus'
        },
        '&:focus:hover': {
          boxShadow: 'primaryFocusHover'
        }
      },
      secondary: {
        color: 'white',
        bg: 'secondary.bg',
        '&:hover': {
          bg: 'secondary.hover'
        },
        '&:focus': {
          boxShadow: 'secondaryFocus'
        },
        '&:focus:hover': {
          boxShadow: 'secondaryFocusHover'
        }
      }
    }
  })}
  ${variant({
    prop: 'shape',
    variants: {
      round: {
        borderRadius: 1
      },
      circle: {
        borderRadius: 2
      }
    }
  })}

  ${backgroundColor}
  ${textColor}
  ${layout}
  ${space}
  ${typography}
`;

Button.defaultProps = {
  px: 3,
  py: '12px'
};

export default Button;
