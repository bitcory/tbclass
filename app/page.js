'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServiceDetail from './components/ServiceDetail';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Link from 'next/link';
import useScrollReveal from './hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Features />
        <ServiceDetail />
        <Reviews />

        {/* CTA Section */}
        <section className="py-32 px-4 bg-[#050505] relative">
          <div className="max-w-5xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              나만의 창작에 집중하세요.
              <br />
              <span className="text-emerald-400">
                AI TOOLBEE GUIDE가 기술을 알려드립니다.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-4xl mx-auto mb-12">
              카메라 기법, 조명, 스타일, 매체 등 AI 이미지/영상 생성에 필요한 모든 기법을 체계적으로 배워보세요.
            </p>
            <Link
              href="/guide"
              className="inline-block px-10 py-4 bg-emerald-500 text-zinc-950 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              지금 시작하기 →
            </Link>
          </div>
        </section>

        <Pricing />
        <Footer />
      </main>
    </>
  );
}
