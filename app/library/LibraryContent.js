'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProtectedContent from '../components/ProtectedContent';
import { getCategoryItems } from '../data/guideData';
import { FolderOpen, FileText, Download } from 'lucide-react';

export default function LibraryContent() {
  const items = getCategoryItems('library');

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header alwaysScrolled={true} />

      <ProtectedContent>
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4 text-emerald-400">
              자료실
            </h1>
            <p className="text-zinc-500 text-lg">
              AI 이미지/영상 생성 관련 유용한 자료를 다운로드하세요
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-white/[0.03] ring-1 ring-emerald-500/20 rounded-3xl px-8 md:px-12 py-8 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <div className="max-w-3xl flex items-center gap-4">
                <FolderOpen className="w-10 h-10 flex-shrink-0 text-emerald-400" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-100">자료실</h2>
                  <p className="text-lg text-zinc-400">
                    강의 커리큘럼 및 학습 자료를 다운로드할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Board-style list */}
          <div className="ring-1 ring-white/[0.06] rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="bg-white/[0.03] border-b border-white/[0.06] px-6 py-4 grid grid-cols-12 gap-4 text-sm font-semibold text-zinc-400">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-5 sm:col-span-6">제목</div>
              <div className="col-span-2 text-center hidden sm:block">파일크기</div>
              <div className="col-span-2 text-center hidden sm:block">등록일</div>
              <div className="col-span-6 sm:col-span-1 text-center">다운로드</div>
            </div>

            {/* Table rows */}
            {items.map((item, index) => (
              <div
                key={item.slug}
                className="border-b border-white/[0.04] last:border-b-0 px-6 py-5 grid grid-cols-12 gap-4 items-center hover:bg-white/[0.03] transition-colors"
              >
                <div className="col-span-1 text-center text-zinc-500 font-medium">
                  {index + 1}
                </div>
                <div className="col-span-5 sm:col-span-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-100">{item.title}</p>
                      <p className="text-sm text-zinc-500 mt-0.5">{item.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-center text-sm text-zinc-500 hidden sm:block">
                  {item.fileSize}
                </div>
                <div className="col-span-2 text-center text-sm text-zinc-500 hidden sm:block">
                  {item.date}
                </div>
                <div className="col-span-6 sm:col-span-1 text-center">
                  <a
                    href={item.fileUrl}
                    download
                    className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500 text-zinc-950 rounded-full hover:bg-emerald-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    title="다운로드"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center py-20 text-zinc-500">
                <p className="text-xl">아직 자료가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      </ProtectedContent>

      <Footer />
    </div>
  );
}
