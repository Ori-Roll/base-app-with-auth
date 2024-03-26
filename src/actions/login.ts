'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { LoginSchema } from '@/schemas';
import { signIn } from '@/../auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/../routesConfig';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid email or password' };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid email or password' };
        default:
          return { error: 'An error occurred' };
      }
    }
    throw error;
  }
};
