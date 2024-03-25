'use client';

import React, { useTransition } from 'react';
import { AuthCardWrapper } from './AuthCardWrapper';
import { InputBase } from '@/components/ui/InputBaseWrapper/InputBase';
import { InputHeader } from '@/components/ui/InputHeader/InputHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { LoginSchema } from '@/schemas/index';
import { Button } from '../ui/Button/Button';
import style from './FromStyleTempMod.module.css';
import { login } from '@/actions/login';
import { StringInput } from '../ui/InputsUX/StringInput/StringInput';
import { EmbeddedBanner } from '../ui/EmbeddedBanner/EmbeddedBanner';

type LoginFromProps = {};

const LoginFrom = (props: LoginFromProps) => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = React.useState<string | undefined>();

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setFormError(undefined);
    startTransition(async () => {
      const response = await login(data);
      if (response?.error) {
        setFormError(response?.error);
        reset();
      }
    });
  };

  return (
    <AuthCardWrapper
      headerLabel="Please login with your account"
      bottomOptionButtonLabel="Don't have an account?"
      bottomOptionHref="/auth/register"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputHeader size="double">Email</InputHeader>
        <InputBase size="double" errorMessage={errors.email?.message}>
          <StringInput
            id="email"
            disabled={isPending}
            {...formRegister('email')}
          />
        </InputBase>
        <InputHeader size="double">Password</InputHeader>
        <InputBase size="double" errorMessage={errors.password?.message}>
          <StringInput
            id="password"
            disabled={isPending}
            {...formRegister('password')}
          />
        </InputBase>
        {formError && (
          <EmbeddedBanner
            header={'Error'}
            variant={'error'}
            message={formError}
          />
        )}
        <Button
          className={style['submit-button-modifier']}
          asChild
          type="submit"
          variant="secondary"
          disabled={!!Object.keys(errors).length || isPending}
        >
          {!isPending ? (
            <input type="submit" value="Log in" />
          ) : (
            <div>loading...</div>
          )}
        </Button>
      </form>
    </AuthCardWrapper>
  );
};

export default LoginFrom;
