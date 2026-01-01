
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;

    // Simple hardcoded check for demo purposes
    // In production, use environment variables: process.env.ADMIN_EMAIL
    const VALID_EMAIL = process.env.ADMIN_EMAIL || 'sumit@example.com';
    const VALID_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        const cookieStore = await cookies();
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
    );
}