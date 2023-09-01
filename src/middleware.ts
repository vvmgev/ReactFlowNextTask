import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest): NextResponse<unknown> => {
  const tokenCookie = request.cookies.get('token');
  const tokenValue = tokenCookie?.value
  const pathname: string = request.nextUrl.pathname;
  const isAuthUrl = pathname.startsWith('/login') || pathname.startsWith('/register');

  if(!tokenValue && isAuthUrl) {
    return NextResponse.next();
  }

  if((isAuthUrl && tokenValue)) {
    return NextResponse.rewrite(new URL('/todo', request.url));
  }

  if(!tokenValue) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/todo', '/charts', '/login', '/register'],
}