import React from 'react';
import { LoginCardWrapper } from './LoginCardWrapper';

type LoginFromProps = {};

const LoginFrom = (props: LoginFromProps) => {
  return (
    <LoginCardWrapper
      headerLabel="welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginFrom
    </LoginCardWrapper>
  );
};

export default LoginFrom;
