'use client';

import { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  compositionCategories,
  getTechniquesByCategory,
} from '../data/compositionData';
import {
  Grid3x3, FlipHorizontal, Frame, TrendingUp, Maximize,
  Layers, LayoutGrid, Contrast, Eye,
  Copy, Check, ChevronLeft, ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

const iconMap = {
  Grid3x3, FlipHorizontal, Frame, TrendingUp, Maximize,
  Layers, LayoutGrid, Contrast, Eye,
};

export default function CompositionContent() {
  const [activeCategory, setActiveCategory] = useState(compositionCategories[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [copiedExample, setCopiedExample] = useState(false);

  const techniques = getTechniquesByCategory(activeCategory);
  const technique = techniques[currentIndex];

  const handleCategoryChange = useCallback((catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  }, []);

  const handleCopy = useCallback(async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'template') {
        setCopiedTemplate(true);
        setTimeout(() => setCopiedTemplate(false), 2000);
      } else {
        setCopiedExample(true);
        setTimeout(() => setCopiedExample(false), 2000);
      }
    } catch (e) { /* fallback */ }
  }, []);

  const goPrev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex(i => Math.min(techniques.length - 1, i + 1));

  if (!technique) return null;

  const CatIcon = iconMap[compositionCategories.find(c => c.id === activeCategory)?.icon] || Grid3x3;

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[95%] mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-emerald-400">
              특수기법 · 구도 가이드
            </h1>
            <p className="text-zinc-500 text-lg">
              AI 이미지 생성에 활용할 수 있는 구도 및 특수 촬영 기법을 프롬프트와 함께 익혀보세요
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-10 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 justify-center min-w-max px-4">
              {compositionCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Grid3x3;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                        : 'bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200 ring-1 ring-white/[0.06]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.nameKo}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two-Column Layout — 7:5 ratio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel – Technique Info (7 cols) */}
            <div className="lg:col-span-7 bg-white/[0.03] rounded-2xl ring-1 ring-white/[0.06] p-5 sm:p-6 flex flex-col">
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3">
                <CatIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {compositionCategories.find(c => c.id === activeCategory)?.nameKo}
                </span>
              </div>

              {/* Name */}
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-0.5">
                {technique.nameKo}
              </h2>
              <p className="text-sm text-zinc-500 mb-4">{technique.nameEn}</p>

              {/* Diagram Image — full width, contain to show complete image */}
              <div className="relative w-full rounded-xl overflow-hidden mb-4 bg-zinc-900/50 ring-1 ring-white/[0.06]">
                <Image
                  src={technique.image}
                  alt={technique.nameKo}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                {technique.description}
              </p>

              {/* Use Case Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {technique.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-zinc-300 ring-1 ring-white/[0.08]"
                  >
                    {uc}
                  </span>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {techniques.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'bg-emerald-500 w-4'
                          : 'bg-zinc-700 hover:bg-zinc-500'
                      }`}
                    />
                  ))}
                  <span className="ml-3 text-xs text-zinc-600">
                    {currentIndex + 1}/{techniques.length}
                  </span>
                </div>

                <button
                  onClick={goNext}
                  disabled={currentIndex === techniques.length - 1}
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Panel – Prompts & Keywords (5 cols) */}
            <div className="lg:col-span-5 bg-white/[0.03] rounded-2xl ring-1 ring-white/[0.06] p-5 sm:p-6 flex flex-col">
              <h3 className="text-lg font-bold text-zinc-100 mb-4">예시 프롬프트</h3>

              {/* Template Prompt */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">구조 템플릿</span>
                  <button
                    onClick={() => handleCopy(technique.templatePrompt, 'template')}
                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedTemplate ? '복사됨' : '복사'}
                  </button>
                </div>
                <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-xl p-3">
                  <code className="text-sm text-emerald-300/90 leading-relaxed break-all">
                    {technique.templatePrompt}
                  </code>
                </div>
              </div>

              {/* Example Prompt */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">완성형 예시</span>
                  <button
                    onClick={() => handleCopy(technique.examplePrompt, 'example')}
                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    {copiedExample ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedExample ? '복사됨' : '복사'}
                  </button>
                </div>
                <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-xl p-3">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {technique.examplePrompt}
                  </p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mb-5">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">핵심 키워드</span>
                <div className="flex flex-wrap gap-1.5">
                  {technique.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compatible Tools */}
              <div className="mt-auto">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">호환 도구</span>
                <div className="flex flex-wrap gap-1.5">
                  {technique.compatibleTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-zinc-400 ring-1 ring-white/[0.08]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
