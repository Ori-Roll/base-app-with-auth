import React from 'react';
import styles from './InputBase.module.css';

type Size = 'single' | 'double' | 'conform';

export const InputBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    size?: Size;
    errorMessage?: string;
  }
>(({ className, size, errorMessage, ...props }, ref) => {
  const sizeModule = size ? styles[size] : styles.confirm;

  return (
    <div>
      <div
        ref={ref}
        className={`${styles.wrapper} ${sizeModule} ${className}`}
        {...props}
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
    </div>
  );
});
InputBase.displayName = 'InputBase';
