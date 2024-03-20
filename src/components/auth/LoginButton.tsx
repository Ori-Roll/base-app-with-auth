'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type LoginButtonProps = React.PropsWithChildren<{
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}>;

export const LoginButton = (props: LoginButtonProps) => {
  const { children, mode = 'redirect', asChild } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <button>{children}</button>; //TODO: Implement modal
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
