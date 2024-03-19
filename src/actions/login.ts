'use server';

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    console.log('error ', validatedFields.error);
    return { error: 'Invalid email or password' };
  }

  return { success: 'validated' };
};
