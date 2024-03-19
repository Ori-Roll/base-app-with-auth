import React from 'react';
import styles from './layout.module.css';

type LayoutProps = React.PropsWithChildren<{}>;

const layout = (props: LayoutProps) => {
  const { children } = props;

  return <div className={styles.layout}>{children}</div>;
};

export default layout;
