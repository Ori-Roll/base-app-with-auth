'use client';

import React from 'react';
import styles from './LoginCardWrapper.module.css';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/Card/index';
import { LoginHeader } from '@/components/auth/LoginHeader';
import { Social } from '@/components/auth/Social';

type CardWrapperProps = React.PropsWithChildren<{
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}>;

export const LoginCardWrapper = (props: CardWrapperProps) => {
  const { children, headerLabel, backButtonLabel, backButtonHref, showSocial } =
    props;

  return (
    <Card className={styles.wrapper}>
      <CardHeader className={styles.header}>
        <LoginHeader label="Log in" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <LoginHeader label="Or with" />
      <CardFooter>{showSocial && <Social />}</CardFooter>
    </Card>
  );
};
