import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'));
} 