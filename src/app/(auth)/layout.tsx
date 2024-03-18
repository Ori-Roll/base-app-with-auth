import React from 'react';

type AuthLayoutProps = React.PropsWithChildren<{}>;

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <>
      <div>AuthLayout navbar</div>
      {children}
    </>
  );
};

export default AuthLayout;
