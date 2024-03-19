'use client';

import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/Button/index';

type SocialProps = {};

export const Social = (props: SocialProps) => {
  const handleGoogleClick = () => {
    console.log('Google');
  };

  const handleGithubClick = () => {
    console.log('Github');
  };

  return (
    <>
      <Button size="size-large" onClick={handleGoogleClick}>
        <FcGoogle />
      </Button>
      <Button size="size-large" onClick={handleGithubClick}>
        <FaGithub />
      </Button>
    </>
  );
};
