'use client';

import dynamic from 'next/dynamic';

const GuideContent = dynamic(() => import('./GuideContent'), { ssr: false });

export default function GuidePage() {
  return <GuideContent />;
}
