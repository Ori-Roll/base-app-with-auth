import React from 'react';
import styles from './CardHeader.module.css';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.wrapper} ${className}`} {...props} />
));
CardHeader.displayName = 'CardHeader';
