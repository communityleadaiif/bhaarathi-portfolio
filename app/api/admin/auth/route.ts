import { NextRequest, NextResponse } from 'next/server';
import { validatePassword, getSessionSecret, getSessionCookieName, verifyAdminSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || !validatePassword(password)) {
      return NextResponse.json({ error: 'Invalid executive passcode' }, { status: 401 });
    }

    const response = NextResponse.json({
      success: true,
      message: 'Executive session authenticated'
    });

    response.cookies.set({
      name: getSessionCookieName(),
      value: getSessionSecret(),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Authentication error' }, { status: 500 });
  }
}

export async function GET() {
  const isAuth = await verifyAdminSession();
  return NextResponse.json({ authenticated: isAuth });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Signed out' });
  response.cookies.delete(getSessionCookieName());
  return response;
}
