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
import Link from 'next/link';

type LoginFormProps = {};

const LoginForm = (props: LoginFormProps) => {
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
  const [formErrorMessage, setFormErrorMessage] = React.useState<
    string | undefined
  >();
  const [formSuccessMessage, setFormSuccessMessage] = React.useState<
    string | undefined
  >();

  const onSubmitForm = (data: z.infer<typeof LoginSchema>) => {
    setFormErrorMessage(undefined);
    setFormSuccessMessage(undefined);
    startTransition(async () => {
      const response = await login(data);
      if (response?.error) {
        setFormErrorMessage(response?.error);
        reset();
      }
      if (response?.success) {
        setFormSuccessMessage(response.success);
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
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
        <Link className={style['forgot-password']} href="/auth/reset">
          Forgot password?
        </Link>
        {formErrorMessage && (
          <EmbeddedBanner
            header={'Error'}
            variant={'error'}
            message={formErrorMessage}
          />
        )}
        {formSuccessMessage && (
          <EmbeddedBanner
            variant={'confirmation'}
            message={formSuccessMessage}
          />
        )}
        <Button
          className={style['submit-button-modifier']}
          asChild
          type="submit"
          variant="secondary"
          disabled={!!Object.keys(errors).length || isPending}
        >
          {isPending ? (
            <div>loading...</div>
          ) : (
            <input type="submit" value="Log in" />
          )}
        </Button>
      </form>
    </AuthCardWrapper>
  );
};

export default LoginForm;
