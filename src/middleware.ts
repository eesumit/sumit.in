import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define secured paths
    const isProtectedPath = path.startsWith('/admin');
    const isLoginPath = path === '/admin/login';

    const authToken = request.cookies.get('admin_session')?.value;

    // Redirect to login if accessing protected path without token
    if (isProtectedPath && !isLoginPath && !authToken) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Redirect to dashboard if accessing login with active token
    if (isLoginPath && authToken) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
