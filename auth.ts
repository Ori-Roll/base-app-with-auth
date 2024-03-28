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
  pages: {
    error: '/auth/error',
    signIn: '/auth/login',
  },
  events: {
    linkAccount: async ({ user: { id } }) => {
      console.log('linkAccount user id is ', id);
      try {
        const res = await db.user.update({
          where: {
            id,
          },
          data: {
            emailVerified: new Date(),
          },
        });
      } catch (error) {
        console.error('linkAccount error', error); //TODO: This should be logged to a log service
      }
    },
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      // Allow sign in if the account is Oauth or if using "credentials" and the email is verified
      if (account?.provider !== 'credentials') return true;
      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) return false;
      return true;
    },
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
