import React from 'react';

type LoginHeaderProps = {
  label: string;
};

export const LoginHeader = (props: LoginHeaderProps) => {
  const { label } = props;

  return (
    <>
      <h1>Auth</h1>
      <div>{label}</div>
    </>
  );
};
