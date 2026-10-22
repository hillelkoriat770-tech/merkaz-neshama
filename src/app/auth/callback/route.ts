import { NextResponse } from 'next/server';
// Placeholder only. Implement Supabase SSR cookie/session exchange before production.
export async function GET(request: Request) {
 const origin = new URL(request.url).origin;
 return NextResponse.redirect(new URL('/login?status=callback-not-configured', origin));
}
