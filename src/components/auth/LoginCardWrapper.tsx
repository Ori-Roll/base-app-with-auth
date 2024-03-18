'use client';

import React from 'react';
import {
  // Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Card } from '@/components/ui/Card/Card';

import { LoginHeader } from '@/components/auth/LoginHeader';
import { Social } from '@/components/auth/Social';

import styles from './LoginCardWrapper.module.css';

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
      <CardHeader>
        <LoginHeader label="Please log in" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{showSocial && <Social />}</CardFooter>
    </Card>
  );
};
