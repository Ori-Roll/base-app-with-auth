/**
 * These are unprotected routes that are accessible to everyone
 * @type {string[]}
 */

export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * These are authentication routes
 * These routes will redirect to a protected route if the user is already authenticated
 * @type {string[]}
 */

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
];

/**
 * A prefix for the API auth routes
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect route after a successful login
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings';
