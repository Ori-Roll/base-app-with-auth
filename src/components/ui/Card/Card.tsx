import React from 'react';
import styles from './Card.module.css';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.card} ${className}`} {...props} />
));

Card.displayName = 'Card';
