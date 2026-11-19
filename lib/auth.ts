import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bhaarathi2026!';
const SESSION_COOKIE_NAME = 'bhaarathi_admin_token';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'exec-bhaarathi-secure-session-hash-2026';

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return token === SESSION_SECRET;
}

export function validatePassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function getSessionSecret(): string {
  return SESSION_SECRET;
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE_NAME;
}
