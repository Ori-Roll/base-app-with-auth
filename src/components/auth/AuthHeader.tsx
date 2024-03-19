import React from 'react';
import styles from './AuthHeader.module.css';

type AuthHeaderProps = {
  label: string;
};

export const AuthHeader = (props: AuthHeaderProps) => {
  const { label } = props;

  return <div className={styles.wrapper}>{label}</div>;
};
