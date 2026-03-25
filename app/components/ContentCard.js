'use client';

import Link from 'next/link';
import { BookOpen, GraduationCap, Palette, Brush, Camera, Sun, Film, ClipboardList, FileText, FolderOpen, Sparkles } from 'lucide-react';

const categoryIconMap = {
  '튜토리얼': BookOpen,
  '전문가 과정': GraduationCap,
  '스타일(STYLE)': Palette,
  '매체(MEDIUM)': Brush,
  '카메라(CAMERA)': Camera,
  '조명(LIGHTING)': Sun,
  '영상(VIDEO)': Film,
  '실습과제': ClipboardList,
  'TOOLB': FileText,
  '자료실': FolderOpen,
  '프롬프트맛집': Sparkles,
};

export default function ContentCard({ slug, title, koreanTitle, prompt, images, videos, category }) {
  const isVideo = category === '영상(VIDEO)';
  const thumbnail = isVideo
    ? (videos && videos.length > 0 ? videos[0].src : null)
    : (images && images.length > 0 ? images[0].src : null);
  const IconComp = categoryIconMap[category] || FileText;

  return (
    <Link
      href={`/guide/${slug}`}
      className="bg-white/[0.03] rounded-2xl overflow-hidden ring-1 ring-white/[0.06] hover:ring-emerald-500/20 hover:bg-white/[0.05] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 cursor-pointer group"
    >
      {/* Image area */}
      <div className="relative h-48 bg-white/[0.02] flex items-center justify-center overflow-hidden">
        {isVideo && thumbnail ? (
          <video
            src={thumbnail}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            muted
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
          />
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <IconComp className="w-16 h-16 text-emerald-400/40 group-hover:scale-110 transition-transform duration-500" />
        )}
      </div>

      {/* Content area */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1 text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2">
          {title}
        </h3>
        {koreanTitle && koreanTitle !== title && (
          <p className="text-sm text-zinc-500 mb-3">{koreanTitle}</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {category && (
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
              {category}
            </span>
          )}
          {prompt && (
            <span className="px-3 py-1 bg-white/[0.04] text-zinc-400 rounded-full text-xs font-medium ring-1 ring-white/[0.06] truncate max-w-[200px]">
              {prompt}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
