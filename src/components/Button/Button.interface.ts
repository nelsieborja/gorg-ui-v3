import { LayoutProps, SpaceProps, TypographyProps, ResponsiveValue } from 'styled-system';
import { BackgroundColorProps } from 'styled-system/backgroundColor';
import { TextColorProps } from 'styled-system/textColor';

export enum VariantEnum {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary'
}
export type VariantType = keyof typeof VariantEnum;

type ButtonProps = BackgroundColorProps &
  TextColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    variant?: ResponsiveValue<VariantType>;
    onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
  };

export default ButtonProps;
