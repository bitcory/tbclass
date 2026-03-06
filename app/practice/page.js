'use client';

import dynamic from 'next/dynamic';

const PracticeContent = dynamic(() => import('./PracticeContent'), { ssr: false });

export default function PracticePage() {
  return <PracticeContent />;
}
