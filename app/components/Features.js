'use client';

import { BookOpen, Camera, Sun } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: '튜토리얼',
    description: 'AI 이미지/영상 생성의 기본부터 고급 기법까지 단계별 학습 가이드를 제공합니다.',
    href: '/guide?tab=tutorial',
  },
  {
    icon: Camera,
    title: '이미지 관련',
    description: '스타일, 매체, 카메라, 조명 등 이미지 생성에 필요한 모든 기법을 배워보세요.',
    href: '/guide?tab=style',
  },
  {
    icon: Sun,
    title: '영상 관련',
    description: '카메라 무브먼트, 전환 효과, 모션 등 영상 제작 기법을 마스터하세요.',
    href: '/guide?tab=video',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Guide System
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            AI TOOLBEE GUIDE란?
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
            AI 이미지/영상 생성에 필요한 모든 기법을 체계적으로 배워보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href={feature.href}
                className={`group relative bg-white/[0.03] rounded-2xl p-8 ring-1 ring-white/[0.06] hover:ring-emerald-500/20 hover:bg-white/[0.05] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 reveal reveal-delay-${index + 1}`}
              >
                <div className="inline-flex p-4 rounded-xl bg-emerald-500/10 mb-6">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-zinc-500 mb-6">
            <span className="font-bold text-emerald-400">100개 이상</span>의 기법 가이드가 준비되어 있습니다
          </p>
          <Link
            href="/guide"
            className="inline-block px-8 py-4 bg-emerald-500 text-zinc-950 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            전체 가이드 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
