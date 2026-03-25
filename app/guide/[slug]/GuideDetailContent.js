'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProtectedContent from '../../components/ProtectedContent';
import ContentDetail from '../../components/ContentDetail';
import { getGuideItem, getCategoryForSlug, getAdjacentItems } from '../../data/guideData';

export default function GuideDetailContent({ slug }) {
  const item = getGuideItem(slug);
  const category = getCategoryForSlug(slug);
  const { prev, next } = getAdjacentItems(slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#050505]">
        <Header alwaysScrolled={true} />
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold text-zinc-100 mb-4">콘텐츠를 찾을 수 없습니다</h1>
            <p className="text-zinc-500 mb-8">요청하신 가이드 콘텐츠가 존재하지 않습니다.</p>
            <a
              href="/guide"
              className="inline-block px-8 py-4 bg-emerald-500 text-zinc-950 rounded-full font-bold hover:bg-emerald-400 transition-all hover:scale-105"
            >
              가이드 목록으로 돌아가기
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header alwaysScrolled={true} />

      {category?.id === 'expert' ? (
        <ProtectedContent>
          <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
            <ContentDetail
              item={{ ...item, slug }}
              category={category}
              prevItem={prev}
              nextItem={next}
            />
          </main>
        </ProtectedContent>
      ) : (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
          <ContentDetail
            item={{ ...item, slug }}
            category={category}
            prevItem={prev}
            nextItem={next}
          />
        </main>
      )}

      <Footer />
    </div>
  );
}
