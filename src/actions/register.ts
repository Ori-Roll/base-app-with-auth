'use server';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    console.log('error ', validatedFields.error);
    return { error: 'Invalid email or password' };
  }

  return { success: 'validated' };
};
