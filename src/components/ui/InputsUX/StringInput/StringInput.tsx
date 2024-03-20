import React from 'react';
import styles from './StringInput.module.css';

// export type StringInputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export type StringInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const StringInput = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>((props: StringInputProps, ref) => {
  const { className, ...restProps } = props;

  return (
    <input
      ref={ref}
      className={`${styles.input} ${className}`}
      {...restProps}
    />
  );
});

StringInput.displayName = 'StringInput';
