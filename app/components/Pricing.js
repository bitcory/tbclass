import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            합리적인 요금제
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            당신의 창작 여정에 딱 맞는 플랜을 선택하세요.
            <br />
            언제든지 변경하고 해지할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 초급클래스 (4시간) */}
          <div className="group relative p-8 rounded-2xl bg-white/[0.03] ring-1 ring-white/[0.06] hover:ring-emerald-500/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 reveal reveal-delay-1">
            <h3 className="text-2xl font-bold text-white mb-2">초급클래스 <span className="text-emerald-400">(4시간)</span></h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">₩100,000</span>
            </div>
            <p className="text-zinc-500 mb-8 h-12">
              AI 이미지 생성의 기초를 배우는<br />입문자를 위한 클래스
            </p>
            <Link href="/booking/beginner" className="block text-center w-full py-4 rounded-xl bg-white/[0.04] text-zinc-300 ring-1 ring-white/[0.06] font-semibold hover:bg-white/[0.06] transition-all mb-8">
              신청하기
            </Link>
            <ul className="space-y-4 text-zinc-400">
              <PricingCheck color="text-emerald-400">기본 가이드 접근</PricingCheck>
              <PricingCheck color="text-emerald-400">튜토리얼 콘텐츠</PricingCheck>
              <PricingCheck color="text-emerald-400">커뮤니티 지원</PricingCheck>
            </ul>
          </div>

          {/* 중급클래스*/}
          <div className="group relative p-8 rounded-2xl bg-white/[0.03] ring-1 ring-emerald-500/30 hover:ring-emerald-500/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 shadow-[0_0_40px_rgba(16,185,129,0.08)] reveal reveal-delay-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-xs font-bold text-zinc-950 tracking-wider uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">중급클래스 <span className="text-emerald-400">(8시간)</span></h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-emerald-400">₩250,000</span>
            </div>
            <p className="text-zinc-500 mb-8 h-12">
              본격적인 창작 활동을 위한<br />심화 과정 클래스
            </p>
            <Link href="/booking/intermediate" className="block text-center w-full py-4 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all mb-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              신청하기
            </Link>
            <ul className="space-y-4 text-zinc-400">
              <PricingCheck color="text-emerald-400">전체 가이드 무제한 접근</PricingCheck>
              <PricingCheck color="text-emerald-400">전문가 과정 포함</PricingCheck>
              <PricingCheck color="text-emerald-400">실습 과제 및 피드백</PricingCheck>
            </ul>
          </div>

          {/* 마스터클래스 */}
          <div className="group relative p-8 rounded-2xl bg-white/[0.03] ring-1 ring-white/[0.06] hover:ring-emerald-500/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 reveal reveal-delay-3">
            <h3 className="text-2xl font-bold text-white mb-2">마스터클래스 <span className="text-emerald-400">(12시간)</span></h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">₩450,000</span>
            </div>
            <p className="text-zinc-500 mb-8 h-12">
              팀과 기업을 위한<br />맞춤형 프리미엄 교육
            </p>
            <Link href="/booking/master" className="block text-center w-full py-4 rounded-xl bg-white/[0.04] text-zinc-300 ring-1 ring-white/[0.06] font-semibold hover:bg-white/[0.06] transition-all mb-8">
              신청하기
            </Link>
            <ul className="space-y-4 text-zinc-400">
              <PricingCheck color="text-emerald-400">초.중급 클래스 전과정 마스터</PricingCheck>
              <PricingCheck color="text-emerald-400">툴비 각종 젬지침 공개 및 개발교육</PricingCheck>
              <PricingCheck color="text-emerald-400">툴비 협업 클래스 제공</PricingCheck>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCheck({ children, color }) {
  return (
    <li className="flex items-center">
      <svg className={`w-5 h-5 ${color} mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}
