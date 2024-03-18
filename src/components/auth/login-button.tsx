'use client';

import React from 'react';

type LoginButtonProps = React.PropsWithChildren<{
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}>;

export const LoginButton = (props: LoginButtonProps) => {
  const { children, mode = 'redirect', asChild } = props;

  if (mode === 'modal') {
    return <button>{children}</button>; //TODO: Implement modal
  }

  return <span className="cursor-pointer">{children}</span>;
};
