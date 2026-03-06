import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');

const clerk = isClerkConfigured ? clerkMiddleware() : null;

export default async function middleware(request, event) {
  if (!clerk) return NextResponse.next();
  try {
    return await clerk(request, event);
  } catch (error) {
    console.error('Clerk middleware error, falling through:', error.message);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
