import createMiddleware from 'next-intl/middleware';
import {routing} from './navigation';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except static files and api
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
