import React from 'react';
import styles from './CardFooter.module.css';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.wrapper} ${className}`} {...props} />
));
CardFooter.displayName = 'CardFooter';
