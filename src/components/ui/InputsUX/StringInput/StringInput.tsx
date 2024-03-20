import React from 'react';
import styles from './StringInput.module.css';

export type StringInputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const StringInput = (props: StringInputProps) => {
  const { className, ...restProps } = props;

  return (
    <input
      type="text"
      className={`${styles.input} ${className}`}
      {...restProps}
    />
  );
};
