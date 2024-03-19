import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

type Size = 'size-default' | 'size-small' | 'size-large' | 'size-icon';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
};

const DEFAULT = 'default';
const SIZE_DEFAULT = 'size-default';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = DEFAULT,
      size = SIZE_DEFAULT,
      asChild = false,
      ...restProps
    } = props;

    const { disabled } = props;

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={`${styles['color-theme']} ${styles[variant]} ${
          styles[size]
        } ${disabled ? styles.disabled : ''} ${className}`}
        ref={ref}
        {...restProps}
      />
    );
  }
);
Button.displayName = 'Button';
