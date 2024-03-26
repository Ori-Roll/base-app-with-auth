import GitHub from 'next-auth/providers/github';

export default {
  providers: [
    GitHub({
      clientId: process.env.CLIENT_GITHUB_ID,
      clientSecret: process.env.CLIENT_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
