'use client';

import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/Button/';

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
      <Button onClick={handleGoogleClick}>
        <FcGoogle />
      </Button>
      <Button onClick={handleGithubClick}>
        <FaGithub />
      </Button>
    </>
  );
};
