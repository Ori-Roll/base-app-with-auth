import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/Credentials';

import { LoginSchema } from '@/schemas';

import type { NextAuthConfig } from 'next-auth';
import { getUserByEmail } from '@/data/user';
import GitHub from 'next-auth/providers/github';

export default {
  providers: [
    GitHub({
      clientId: process.env.CLIENT_GITHUB_ID,
      clientSecret: process.env.CLIENT_GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        console.log('In authorize');
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          console.log('!autho: validatedFields');
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log('!autho: passwordsMatch');
          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
