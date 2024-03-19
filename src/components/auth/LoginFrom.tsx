import React from 'react';
import { LoginCardWrapper } from './LoginCardWrapper';
import { InputBase } from '../ui/InputBaseWrapper/InputBase';
import { InputHeader } from '../ui/InputHeader/InputHeader';

type LoginFromProps = {};

const LoginFrom = (props: LoginFromProps) => {
  return (
    <LoginCardWrapper
      headerLabel="welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <InputHeader size="double">Email</InputHeader>
      <InputBase size="double">
        <input
          type="text"
          style={{
            width: '100%',
            backgroundColor: 'none',
            background: 'transparent',
            border: 'none',
          }}
        />
      </InputBase>
      <InputHeader size="double">Password</InputHeader>
      <InputBase size="double">
        <input
          type="text"
          style={{
            width: '100%',
            backgroundColor: 'none',
            background: 'transparent',
            border: 'none',
          }}
        />
      </InputBase>
    </LoginCardWrapper>
  );
};

export default LoginFrom;
