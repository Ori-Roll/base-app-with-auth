'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/Button/index';
import { DEFAULT_LOGIN_REDIRECT } from '@/../routesConfig';

type SocialProps = {};

enum ProviderOption {
  google = 'google',
  github = 'github',
}

export const Social = (props: SocialProps) => {
  const onClick = (providerOption: ProviderOption) => {
    signIn(providerOption, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <>
      <Button size="size-large" onClick={() => onClick(ProviderOption.google)}>
        <FcGoogle />
      </Button>
      <Button size="size-large" onClick={() => onClick(ProviderOption.github)}>
        <FaGithub />
      </Button>
    </>
  );
};
