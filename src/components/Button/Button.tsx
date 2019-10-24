import React from 'react';

interface Props {
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
  variant?: 'default' | 'outline' | 'text';
}

const Button: React.FC<Props> = props => <button {...props} />;

export default Button;
