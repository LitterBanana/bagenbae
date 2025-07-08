// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Contoh validasi sederhana
  if (email === 'user@example.com' && password === 'password123') {
    return NextResponse.json({ 
      success: true,
      user: {
        id: 1,
        name: 'John Doe',
        email: 'user@example.com'
      }
    });
  }

  return NextResponse.json(
    { success: false, message: 'Email atau password salah' },
    { status: 401 }
  );
}