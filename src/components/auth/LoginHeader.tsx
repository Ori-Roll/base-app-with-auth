import React from 'react';
import styles from './LoginHeader.module.css';

type LoginHeaderProps = {
  label: string;
};

export const LoginHeader = (props: LoginHeaderProps) => {
  const { label } = props;

  return <div className={styles.wrapper}>{label}</div>;
};
