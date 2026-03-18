'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProtectedContent from '../components/ProtectedContent';
import { getCategoryItems } from '../data/guideData';
import { FolderOpen, FileText, Download } from 'lucide-react';

export default function LibraryContent() {
  const items = getCategoryItems('library');

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      <ProtectedContent>
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              자료실
            </h1>
            <p className="text-gray-600 text-lg">
              AI 이미지/영상 생성 관련 유용한 자료를 다운로드하세요
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl px-8 md:px-12 py-8 text-white shadow-xl">
              <div className="max-w-3xl flex items-center gap-4">
                <FolderOpen className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">자료실</h2>
                  <p className="text-lg opacity-90">
                    강의 커리큘럼 및 학습 자료를 다운로드할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Board-style list */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600">
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
                className="border-b border-gray-100 last:border-b-0 px-6 py-5 grid grid-cols-12 gap-4 items-center hover:bg-orange-50/50 transition-colors"
              >
                <div className="col-span-1 text-center text-gray-400 font-medium">
                  {index + 1}
                </div>
                <div className="col-span-5 sm:col-span-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-center text-sm text-gray-500 hidden sm:block">
                  {item.fileSize}
                </div>
                <div className="col-span-2 text-center text-sm text-gray-500 hidden sm:block">
                  {item.date}
                </div>
                <div className="col-span-6 sm:col-span-1 text-center">
                  <a
                    href={item.fileUrl}
                    download
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:scale-110 transition-transform shadow-md"
                    title="다운로드"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center py-20 text-gray-500">
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
