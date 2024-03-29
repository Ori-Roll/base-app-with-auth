import { db } from '@/lib/db';

export const createVerificationToken = async (data: {
  email: string;
  token: string;
  expires: Date;
}) => {
  try {
    const verificationToken = await db.verificationToken.create({
      data,
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByUserId = async (id: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        id,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const deleteVerificationToken = async (id: string) => {
  try {
    const verificationToken = await db.verificationToken.delete({
      where: {
        id,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};
