import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Need your email' })
    .email('This is not a valid email.'),
  password: z.string().min(1, { message: 'Any passwords?' }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Need your email' })
    .email('This is not a valid email.'),
  password: z
    .string()
    .min(6, { message: 'Password should be at least 6 characters long?' }),
  name: z.string().min(1, { message: 'Name is required' }),
});
