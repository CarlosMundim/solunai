import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Add lang attribute based on path
  if (pathname.startsWith('/en')) {
    const response = NextResponse.next();
    response.headers.set('x-lang', 'en');
    return response;
  }

  const response = NextResponse.next();
  response.headers.set('x-lang', 'ja');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
