'use server';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { getVerificationTokenByToken } from '@/data/verificationToken';

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Invalid token' };
  }

  const hasExpired = new Date() > new Date(existingToken.expires);

  if (hasExpired) {
    return { error: 'Token expired' };
  }

  const user = await getUserByEmail(existingToken.email);

  if (!user) {
    return { error: 'Email not found' };
  }
  try {
    await db.user.update({
      where: { email: existingToken.email },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });
  } catch (error) {
    return { error: 'Something went wrong' };
  }

  return { success: 'Email verified' };
};
