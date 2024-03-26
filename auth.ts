import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { type UserRole } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './src/lib/db';
import { getUserById } from '@/data/user';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    // signIn: async ({ user }) => {
    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser || !existingUser.emailVerified) {
    //     return false;
    //   }

    //   return true;
    // },
    session: async ({ token, session }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
