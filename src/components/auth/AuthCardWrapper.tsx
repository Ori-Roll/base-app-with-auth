'use client';

import React from 'react';
import styles from './AuthCardWrapper.module.css';

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/Card/index';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { Social } from '@/components/auth/Social';
import Link from 'next/link';

type AuthCardWrapperProps = React.PropsWithChildren<{
  headerLabel: string;
  bottomOptionButtonLabel: string;
  bottomOptionHref: string;
  showSocial?: boolean;
}>;

export const AuthCardWrapper = (props: AuthCardWrapperProps) => {
  const {
    children,
    headerLabel,
    bottomOptionButtonLabel,
    bottomOptionHref,
    showSocial,
  } = props;

  return (
    <Card className={styles.wrapper}>
      <CardHeader className={styles.header}>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <>
          <AuthHeader label="Or with" />
          <CardFooter>
            <Social />
          </CardFooter>
        </>
      )}
      {/* TODO: This should be in footer (and footer should be flex column with change to social buttons flex ) */}
      <Link href={bottomOptionHref} className={styles['no-account-btn']}>
        {bottomOptionButtonLabel}
      </Link>
    </Card>
  );
};
