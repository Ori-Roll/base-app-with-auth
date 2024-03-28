import React from 'react';
import styles from './CardContent.module.css';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.wrapper} ${className}`} {...props} />
));
CardContent.displayName = 'CardContent';
