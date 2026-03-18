'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const BookingContent = dynamic(() => import('./BookingContent'), { ssr: false });

export default function BookingPage() {
  const { plan } = useParams();
  return <BookingContent plan={plan} />;
}
