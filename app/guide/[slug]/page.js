'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const GuideDetailContent = dynamic(() => import('./GuideDetailContent'), { ssr: false });

export default function GuideDetailPage() {
  const { slug } = useParams();
  return <GuideDetailContent slug={slug} />;
}
