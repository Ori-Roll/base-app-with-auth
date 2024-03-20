'use client';

import React, { useTransition } from 'react';
import { AuthCardWrapper } from './AuthCardWrapper';
import { InputBase } from '../ui/InputBaseWrapper/InputBase';
import { InputHeader } from '../ui/InputHeader/InputHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { RegisterSchema } from '@/schemas/index';
import { Button } from '../ui/Button/Button';
import { StringInput } from '../ui/InputsUX/StringInput/StringInput';
import style from './FromStyleTempMod.module.css';
import { register } from '@/actions/register';

type RegisterFromProps = {};

const RegisterFrom = (props: RegisterFromProps) => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const [isPending, startTransition] = useTransition();
  const [error, setError] = React.useState<string | undefined>();

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError(undefined);
    startTransition(async () => {
      const response = await register(data);
      if (response?.error) {
        setError(response?.error);
        reset();
      }
    });
  };

  return (
    <AuthCardWrapper
      headerLabel="Register"
      bottomOptionButtonLabel="Already have an account?"
      bottomOptionHref="/auth/login"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputHeader size="double">Your name</InputHeader>
        <InputBase size="double" errorMessage={errors.name?.message}>
          <StringInput
            id="name"
            disabled={isPending}
            {...formRegister('name')}
          />
        </InputBase>
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

        {/*   //TODO: add error message component */}
        {error && <div>{error}</div>}
        <Button
          className={style['submit-button-modifier']}
          asChild
          type="submit"
          variant="secondary"
          disabled={!!Object.keys(errors).length || isPending}
        >
          {!isPending ? (
            <input type="submit" value="Register" />
          ) : (
            <div>loading...</div>
          )}
        </Button>
      </form>
    </AuthCardWrapper>
  );
};

export default RegisterFrom;
