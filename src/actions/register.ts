'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid email or password' };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'User already exists' };
  }

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  await db.user.create({
    data: newUser,
  });

  const verificationToken = await generateVerificationToken(email);

  if (!verificationToken) {
    return { error: 'An error occurred' };
  }
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: 'Success! Please check your email' };
};
