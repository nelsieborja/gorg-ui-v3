import { LayoutProps, SpaceProps, TypographyProps, ResponsiveValue } from 'styled-system';
import { BackgroundColorProps } from 'styled-system/backgroundColor';
import { TextColorProps } from 'styled-system/textColor';

export type VariantType = 'default' | 'primary' | 'secondary';

interface ButtonProps
  extends BackgroundColorProps,
    TextColorProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {
  /**
   * Sets the base appearance of the component
   * @default default
   */
  variant?: ResponsiveValue<VariantType>;
  /**
   * Handles the click event of the component
   */
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
}

export default ButtonProps;
