import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // For demo purposes, allow all requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
