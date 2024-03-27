import { v4 as uuid } from 'uuid';

import {
  createVerificationToken,
  deleteVerificationToken,
  getVerificationTokenByEmail,
} from '@/data/verificationToken';
import { db } from '@/lib/db';

export const generateVerificationToken = async (email: string) => {
  try {
    const token = uuid();
    const expires = new Date(new Date().getTime() + 1000 * 60 * 60);

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
      await deleteVerificationToken(existingToken.id);
    }

    const verificationToken = await createVerificationToken({
      email,
      token,
      expires,
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};
