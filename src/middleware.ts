import authConfig from '../auth.config';
import NextAuth from 'next-auth';

import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from '../routesConfig';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log('-------------------------- ');
  console.log('MID url is ', nextUrl.pathname);
  console.log('MID req.auth ', req.auth);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log('MID - isApiAuthRoute ', isApiAuthRoute);

  console.log('MID - isPublicRoute ', isPublicRoute);

  console.log('MID - isAuthRoute ', isAuthRoute);

  if (isApiAuthRoute) {
    console.log('MID - we are in api auth route');
    return;
  }

  if (isAuthRoute) {
    console.log('MID - we are in auth route');
    if (isLoggedIn) {
      console.log('MID - we are logged in');
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    console.log('MID - we are not logged in');
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log('MID - we are not logged in and not in public route');
    return Response.redirect(new URL('/auth/login', nextUrl));
  }
  console.log('MID - out');
  return;
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)',
  ],
};
