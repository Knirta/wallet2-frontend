const PUBLIC_ROUTES = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/verify-email',
  '/api/auth/resend-verification',
  '/api/auth/refresh',
];

export const isPublicRoute = url => {
  if (!url) return false;

  return PUBLIC_ROUTES.some(route => url.includes(route));
};
