'use client';

import dynamic from 'next/dynamic';

const BookingManager = dynamic(() => import('./BookingManager'), { ssr: false });

export default function BookingManagerPage() {
  return <BookingManager />;
}
