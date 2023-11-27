import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const session = req.cookies.get('next-auth.session-token');

  const url = new URL('/', req.url);

  if (!session) return NextResponse.redirect(url);
  return NextResponse.next();
}

export const config = {
  matcher: ['/list']
};
