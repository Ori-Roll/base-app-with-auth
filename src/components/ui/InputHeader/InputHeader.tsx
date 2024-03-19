import React from 'react';
import styles from './InputHeader.module.css';

type Size = 'single' | 'double' | 'conform';

export const InputHeader = React.forwardRef<
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
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
});
InputHeader.displayName = 'InputHeader';
