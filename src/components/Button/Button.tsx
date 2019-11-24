import React from 'react';

import ButtonProps from './Button.interface';
import ButtonStyled from './Button.styles';

const Button: React.FC<ButtonProps> = props => <ButtonStyled {...props} />;

Button.defaultProps = {
  variant: 'default',
};

export default Button;
