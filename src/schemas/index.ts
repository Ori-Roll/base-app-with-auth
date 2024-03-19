import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Need your email' })
    .email('This is not a valid email.'),
  password: z.string().min(1, { message: 'Any passwords?' }),
});
