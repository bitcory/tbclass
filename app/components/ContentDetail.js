'use client';

import { useState } from 'react';
import { Copy, Check, ChevronLeft, ChevronRight, Play, ScrollText, Lightbulb, Calendar, UserCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

// Safely render HTML content (data contains inline HTML like <strong>)
function HtmlContent({ html, className = '' }) {
  if (!html) return null;
  const processed = html.replace(/\n/g, '<br>');
  return <div className={className} dangerouslySetInnerHTML={{ __html: processed }} />;
}

// Highlight keyword in prompt text with emerald bold
function HighlightKeyword({ text, keyword }) {
  if (!keyword || !text) return <>{text}</>;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === keyword.toLowerCase()
          ? <span key={i} className="text-emerald-400 font-bold">{part}</span>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={`flex-shrink-0 p-2 bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition-colors ${className}`} title="복사">
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
    </button>
  );
}

// ===== TUTORIAL RENDERER =====
function TutorialContent({ item }) {
  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed text-base" />
        </div>
      )}

      {item.parts && item.parts.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-emerald-400" /> 퀘스트 블록 조립하기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.parts.map((part, idx) => (
              <div key={idx} className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6 hover:ring-emerald-500/20 transition-all">
                <h4 className="text-emerald-400 font-bold text-lg mb-3">{part.title}</h4>
                <HtmlContent html={part.description} className="text-zinc-400 leading-relaxed mb-4 text-sm" />

                {part.keywords && part.keywords.length > 0 && (
                  <div className="mt-4">
                    <p className="text-zinc-600 text-xs font-medium mb-2 uppercase tracking-wider">키워드 예시 (Keywords)</p>
                    <ul className="space-y-1">
                      {part.keywords.map((kw, kwIdx) => (
                        <li key={kwIdx} className="text-zinc-300 text-sm pl-4 relative">
                          <span className="absolute left-0 text-emerald-400">•</span>
                          {kw}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {part.example && (
                  <div className="mt-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3">
                    <p className="text-xs text-emerald-400 font-medium mb-1">선택 예시</p>
                    <p className="text-zinc-300 font-mono text-sm">{part.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.tip && (
        <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-6">
          <h4 className="text-yellow-400 font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" />{item.tip.title || 'Tip'}</h4>
          <HtmlContent html={item.tip.content} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {item.completion && (
        <div className="border-t border-white/[0.06] pt-8">
          <h3 className="text-emerald-400 font-bold text-2xl mb-4">{item.completion.title}</h3>
          <HtmlContent html={item.completion.message} className="text-zinc-300 leading-relaxed mb-6" />

          {item.completion.choice && (
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 mb-6">
              <HtmlContent html={item.completion.choice} className="text-zinc-300 leading-relaxed" />
            </div>
          )}

          <p className="text-emerald-400 font-semibold mb-3">
            (조립된 [{item.koreanTitle}] 블록)
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch mb-6">
            <div className="flex-1 bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-2xl p-6 flex items-center justify-between min-h-[200px]">
              <p className="text-zinc-100 font-mono text-lg leading-relaxed">{item.completion.result}</p>
              <CopyButton text={item.completion.result} />
            </div>
            {item.completion.image && (
              <div className="w-full md:w-[300px] h-[300px] rounded-2xl overflow-hidden border-3 border-emerald-500 flex-shrink-0">
                <img src={item.completion.image} alt="Result" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {item.completion.status && (
            <>
              <p className="text-emerald-400 font-semibold mb-3">(현재 프롬프트 조립 상태)</p>
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 mb-6">
                <HtmlContent html={item.completion.status} className="text-zinc-300 font-mono text-sm" />
              </div>
            </>
          )}

          {item.completion.nextStep && (
            <HtmlContent html={item.completion.nextStep} className="text-zinc-300 leading-relaxed mt-6" />
          )}
        </div>
      )}
    </div>
  );
}

// ===== EXPERT RENDERER =====
function ExpertContent({ item }) {
  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {item.intro && (
        <div className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6">
          <h3 className="text-emerald-400 font-bold text-xl mb-3">{item.intro.title}</h3>
          <HtmlContent html={item.intro.content} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {item.parts && item.parts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {item.parts.map((part, idx) => (
            <div key={idx} className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 flex items-center gap-3">
                <span className="bg-emerald-500 text-zinc-950 w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                {part.title}
              </h3>
              <HtmlContent html={part.content || part.description} className="text-zinc-300 leading-relaxed whitespace-pre-line text-[15px]" />
            </div>
          ))}
        </div>
      )}

      {item.styleExamples && item.styleExamples.length > 0 && (
        <div>
          <h3 className="text-emerald-400 font-bold text-xl mb-2">실전 예시: 스타일이 모든 것을 바꾸는 순간</h3>
          <p className="text-zinc-400 mb-6">
            기본 주제: <span className="text-yellow-400 font-medium">a man sitting in a cafe (카페에 앉아있는 남자)</span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {item.styleExamples.map((ex, idx) => (
              <div key={idx} className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-500 text-zinc-950 w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                  <div>
                    <h4 className="text-emerald-400 font-bold text-lg">{ex.title}</h4>
                    <p className="text-zinc-500 text-sm">{ex.subtitle}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{ex.description}</p>

                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 mb-4">
                  <p className="text-emerald-400 text-xs font-bold mb-1">프롬프트:</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-zinc-300 font-mono text-xs leading-relaxed">{ex.prompt}</p>
                    <CopyButton text={ex.prompt} />
                  </div>
                </div>

                {ex.result && (
                  <div className="bg-white/[0.03] rounded-xl p-4 mb-4">
                    <p className="text-emerald-400 text-xs font-bold mb-1">결과:</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{ex.result}</p>
                  </div>
                )}

                {ex.keywords && (
                  <div className="flex flex-wrap gap-1.5">
                    {ex.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">{kw}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.tip && (
        <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-6">
          <h4 className="text-yellow-400 font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" />{item.tip.title || 'Tip'}</h4>
          <HtmlContent html={item.tip.content} className="text-zinc-300 leading-relaxed whitespace-pre-line" />
        </div>
      )}

      {item.conclusion && (
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
          <h4 className="text-emerald-400 font-bold text-lg mb-2">{item.conclusion.title}</h4>
          <HtmlContent html={item.conclusion.content} className="text-zinc-300 leading-relaxed" />
        </div>
      )}
    </div>
  );
}

// ===== INSTRUCTOR RENDERER =====
function InstructorContent({ item }) {
  const info = item.instructorInfo;
  const usageTips = item.usage ? item.usage.filter(tip => tip && tip.trim() !== '') : [];

  return (
    <div className="space-y-8">
      {info && (
        <div className="bg-white/[0.03] ring-1 ring-emerald-500/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {info.image && (
              <div className="w-56 h-56 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-emerald-500/30 shadow-lg">
                <img src={info.image} alt={info.name} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">{info.name}</h2>
              {info.position && <p className="text-emerald-400 font-medium mb-3">{info.position}</p>}
              {info.company && info.company.length > 0 && (
                <div className="space-y-1 mb-3">
                  {info.company.map((c, idx) => (
                    <p key={idx} className="text-zinc-400 text-sm">{c}</p>
                  ))}
                </div>
              )}
              {info.email && (
                <p className="text-zinc-400 text-sm">
                  <a href={`mailto:${info.email}`} className="hover:text-emerald-400 transition-colors">{info.email}</a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {item.description && (
        <div className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {usageTips.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-zinc-100 mb-4">주요 경력</h2>
          <ul className="space-y-3">
            {usageTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-300">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950 text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <HtmlContent html={tip} className="leading-relaxed" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ===== PRACTICE RENDERER =====
function PracticeContent({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {item.videoUrl && (
          <div>
            <h3 className="text-lg font-bold text-zinc-100 mb-3">참고 영상</h3>
            <div className="rounded-2xl overflow-hidden bg-zinc-900">
              {item.videoUrl.includes('youtube.com') || item.videoUrl.includes('youtu.be') ? (
                <iframe
                  src={item.videoUrl}
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={item.videoUrl} controls className="w-full aspect-video" />
              )}
            </div>
          </div>
        )}

        {item.prompt && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-zinc-100">예시 프롬프트</h3>
              <CopyButton text={item.prompt} />
            </div>
            <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-2xl p-4 overflow-auto max-h-[400px]">
              <pre className="text-emerald-400 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                {expanded ? item.prompt : item.prompt.substring(0, 600) + (item.prompt.length > 600 ? '...' : '')}
              </pre>
              {item.prompt.length > 600 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                >
                  {expanded ? '접기' : '전체 보기'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== VEO PROMPTS RENDERER =====
function VeoPromptsContent({ item }) {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {item.prompts && item.prompts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {item.prompts.map((prompt, idx) => (
            <div key={idx} className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-zinc-100">{prompt.title}</h3>
                <CopyButton text={prompt.content} />
              </div>
              <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-xl p-4 overflow-auto max-h-[300px]">
                <pre className="text-emerald-400 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                  {expandedIdx === idx ? prompt.content : prompt.content.substring(0, 400) + (prompt.content.length > 400 ? '...' : '')}
                </pre>
              </div>
              {prompt.content.length > 400 && (
                <button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="mt-2 text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                >
                  {expandedIdx === idx ? '접기' : '전체 보기'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ===== TEAM VIDEOS RENDERER =====
function TeamVideosContent({ item }) {
  const teamKeys = item.teams ? Object.keys(item.teams).filter(k => k !== 'team3') : [];
  const [activeTeam, setActiveTeam] = useState(teamKeys[0] || '');

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-zinc-300 leading-relaxed" />
        </div>
      )}

      {teamKeys.length > 0 && (
        <>
          <div className="flex gap-2 flex-wrap">
            {teamKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTeam(key)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeTeam === key
                    ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-white/[0.04] text-zinc-400 ring-1 ring-white/[0.06] hover:bg-white/[0.06]'
                }`}
              >
                {item.teams[key].name}
              </button>
            ))}
          </div>

          {activeTeam && item.teams[activeTeam] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.teams[activeTeam].videos.map((video, idx) => (
                <div key={idx} className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl overflow-hidden hover:ring-emerald-500/20 transition-all">
                  <div className="aspect-video bg-zinc-900 relative">
                    {video.url && (video.url.includes('.mp4') || video.url.includes('dropbox.com')) ? (
                      <video src={video.url} controls className="w-full h-full object-cover" />
                    ) : video.url ? (
                      <iframe src={video.url} className="w-full h-full" frameBorder="0" allowFullScreen />
                    ) : video.thumbnail ? (
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600">
                        <Play className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-zinc-100 mb-1">{video.title}</h4>
                    <p className="text-sm text-zinc-500">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ===== BLOG RENDERER =====
function BlogContent({ item, setImageModalIndex }) {
  return (
    <div className="space-y-8">
      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
        {item.date && (
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {item.date}
          </span>
        )}
        {item.author && (
          <span className="flex items-center gap-1.5">
            <UserCircle className="w-4 h-4" />
            {item.author}
          </span>
        )}
      </div>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Blog content */}
      {item.content && (
        <div className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-8">
          <HtmlContent html={item.content} className="text-zinc-300 leading-relaxed text-base" />
        </div>
      )}

      {/* Image */}
      {item.images && item.images.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-zinc-100 mb-4">첨부 이미지</h2>
          <div className="max-w-md">
            <div
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/[0.06] hover:ring-emerald-500/20 transition-all"
              onClick={() => setImageModalIndex(0)}
            >
              <img src={item.images[0].src} alt={item.images[0].caption || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              {item.images[0].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{item.images[0].caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== SUB STYLE COPY BUTTON (dark variant) =====
function SubStyleCopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={`flex-shrink-0 p-1.5 bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition-colors ${className}`} title="복사">
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
    </button>
  );
}

// ===== DEFAULT RENDERER (camera, lighting, style, medium, etc.) =====
function DefaultContent({ item, setImageModalIndex, setVideoModal, isVideoCategory, copiedPrompt, handleCopyPrompt }) {
  const usageTips = item.usage ? item.usage.filter(tip => tip && tip.trim() !== '') : [];
  const hasImages = !isVideoCategory && item.images && item.images.length > 0;

  return (
    <div className="space-y-8">
      {/* Top 2-column: Left(description+badges+prompt+tips) / Right(carousel) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {item.description && (
            <div>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">설명</h2>
              <HtmlContent html={item.description} className="text-zinc-400 leading-relaxed" />
            </div>
          )}

          {/* Keyword + Features + Mood Badges */}
          {(item.prompt || item.features || item.mood) && (
            <div className="flex flex-wrap gap-2.5">
              {item.prompt && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-500">키워드</span>
                  <span className="bg-emerald-500 text-zinc-950 rounded-lg px-3 py-1.5 text-sm font-bold font-mono">{item.prompt}</span>
                  <button
                    onClick={handleCopyPrompt}
                    className="p-1.5 bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition-colors"
                    title="키워드 복사"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
                  </button>
                </div>
              )}
              {item.features && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-500">특징</span>
                  <span className="bg-emerald-500/10 text-emerald-400 rounded-lg px-3 py-1 text-sm font-medium">{item.features}</span>
                </div>
              )}
              {item.mood && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-500">분위기</span>
                  <span className="bg-white/[0.04] text-zinc-400 rounded-lg px-3 py-1 text-sm font-medium ring-1 ring-white/[0.06]">{item.mood}</span>
                </div>
              )}
            </div>
          )}

          {/* Usage Tips */}
          {usageTips.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">활용 팁</h2>
              <ul className="space-y-2">
                {usageTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-400">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <HtmlContent html={tip} className="leading-relaxed" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT — Single Image */}
        {hasImages && (
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.06] bg-zinc-900">
              <div
                className="aspect-video cursor-pointer"
                onClick={() => setImageModalIndex(0)}
              >
                <img
                  src={item.images[0].src}
                  alt={item.images[0].caption || ''}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Caption */}
            {item.images[0].caption && (
              <div className="bg-white/[0.03] ring-1 ring-white/[0.06] rounded-xl px-4 py-2.5">
                <p className="text-zinc-200 text-sm font-bold">{item.images[0].caption}</p>
              </div>
            )}

            {/* Prompt card */}
            {(item.images[0].prompt || item.images[0].caption) && (
              <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-zinc-500 mb-1.5 uppercase tracking-wider font-medium">예시 프롬프트</p>
                    <p className="text-zinc-200 font-mono text-sm leading-relaxed break-words">
                      <HighlightKeyword text={item.images[0].prompt || item.images[0].caption || ''} keyword={item.prompt} />
                    </p>
                  </div>
                  <CopyButton text={item.images[0].prompt || item.images[0].caption || ''} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {item.videos && item.videos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-zinc-100 mb-4">예시 영상</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.videos.map((video, idx) => (
              <div
                key={idx}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/[0.06] hover:ring-emerald-500/20 transition-all bg-zinc-900"
                onClick={() => setVideoModal(video)}
              >
                <video src={video.src} className="w-full h-full object-cover" muted loop playsInline
                  onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                {video.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm">{video.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.womanHairstyles && (
        <div>
          <h2 className="text-xl font-bold text-zinc-100 mb-4">여성 헤어스타일</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {item.womanHairstyles.map((hs, idx) => (
              <div key={idx} className="text-center">
                {hs.image && <img src={hs.image} alt={hs.name} className="w-full aspect-video object-cover rounded-xl mb-2 ring-1 ring-white/[0.06]" loading="lazy" />}
                <p className="text-sm font-medium text-zinc-200">{hs.name}</p>
                {hs.keyword && <p className="text-xs text-zinc-500">{hs.keyword}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      {item.manHairstyles && (
        <div>
          <h2 className="text-xl font-bold text-zinc-100 mb-4">남성 헤어스타일</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {item.manHairstyles.map((hs, idx) => (
              <div key={idx} className="text-center">
                {hs.image && <img src={hs.image} alt={hs.name} className="w-full aspect-video object-cover rounded-xl mb-2 ring-1 ring-white/[0.06]" loading="lazy" />}
                <p className="text-sm font-medium text-zinc-200">{hs.name}</p>
                {hs.keyword && <p className="text-xs text-zinc-500">{hs.keyword}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function ContentDetail({ item, category, prevItem, nextItem }) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [imageModalIndex, setImageModalIndex] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  if (!item) return null;

  const isTutorial = item.type === 'tutorial';
  const isExpert = item.type === 'expert' || item.type === 'expert-style' || item.type === 'expert-dictionary';
  const isPractice = item.type === 'practice';
  const isVeoPrompts = item.type === 'veo-prompts';
  const isTeamVideos = item.type === 'team-videos';
  const isBlog = item.type === 'blog';
  const isInstructor = !!item.instructorInfo;
  const isDefault = !isTutorial && !isExpert && !isInstructor && !isPractice && !isVeoPrompts && !isTeamVideos && !isBlog;

  const handleCopyPrompt = async () => {
    if (item.prompt) {
      await navigator.clipboard.writeText(item.prompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  return (
    <div className="max-w-[95%] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6 flex-wrap">
        <Link href="/guide" className="hover:text-emerald-400 transition-colors">가이드</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/guide?tab=${category.id}`} className="hover:text-emerald-400 transition-colors">{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-zinc-200 font-medium truncate">{item.title}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">{item.title}</h1>
      {item.koreanTitle && item.koreanTitle !== item.title && (
        <p className="text-lg text-zinc-500 mb-6">{item.koreanTitle}</p>
      )}

      {/* Prompt Box - only for non-default types */}
      {item.prompt && !isDefault && (
        <div className="bg-zinc-900/80 ring-1 ring-white/[0.06] text-zinc-100 rounded-2xl p-6 mb-8 flex items-center justify-between gap-4 border-l-4 border-emerald-500">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Prompt</p>
            <p className="text-xl font-mono font-bold break-words text-emerald-400">{item.prompt}</p>
          </div>
          <button
            onClick={handleCopyPrompt}
            className="flex-shrink-0 p-3 bg-white/[0.06] hover:bg-white/[0.1] rounded-xl transition-colors"
            title="프롬프트 복사"
          >
            {copiedPrompt ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-zinc-400" />}
          </button>
        </div>
      )}

      {/* Content body - dispatch by type */}
      {isTutorial ? (
        <TutorialContent item={item} />
      ) : isExpert ? (
        <ExpertContent item={item} />
      ) : isInstructor ? (
        <InstructorContent item={item} />
      ) : isPractice ? (
        <PracticeContent item={item} />
      ) : isVeoPrompts ? (
        <VeoPromptsContent item={item} />
      ) : isTeamVideos ? (
        <TeamVideosContent item={item} />
      ) : isBlog ? (
        <BlogContent item={item} setImageModalIndex={setImageModalIndex} />
      ) : (
        <DefaultContent item={item} setImageModalIndex={setImageModalIndex} setVideoModal={setVideoModal} isVideoCategory={category?.id === 'video'} copiedPrompt={copiedPrompt} handleCopyPrompt={handleCopyPrompt} />
      )}

      {/* Image for tutorial/expert if they have one */}
      {(isTutorial || isExpert) && item.images && item.images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-zinc-100 mb-4">예시 이미지</h2>
          <div className="max-w-md">
            <div className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/[0.06] hover:ring-emerald-500/20 transition-all" onClick={() => setImageModalIndex(0)}>
              <img src={item.images[0].src} alt={item.images[0].caption || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              {item.images[0].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{item.images[0].caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/[0.06]">
        {prevItem ? (
          <Link href={`/guide/${prevItem.slug}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] text-zinc-300 ring-1 ring-white/[0.06] hover:bg-white/[0.06] hover:text-emerald-400 transition-all font-medium">
            <ChevronLeft className="w-4 h-4" />
            이전
          </Link>
        ) : <div />}
        {nextItem ? (
          <Link href={`/guide/${nextItem.slug}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] text-zinc-300 ring-1 ring-white/[0.06] hover:bg-white/[0.06] hover:text-emerald-400 transition-all font-medium">
            다음
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>

      {/* Image Modal */}
      {imageModalIndex !== null && item.images && (
        <ImageModal
          images={item.images}
          currentIndex={imageModalIndex}
          onClose={() => setImageModalIndex(null)}
          onPrev={() => setImageModalIndex(Math.max(0, imageModalIndex - 1))}
          onNext={() => setImageModalIndex(Math.min(item.images.length - 1, imageModalIndex + 1))}
        />
      )}

      {/* Video Modal */}
      {videoModal && (
        <VideoModal video={videoModal} onClose={() => setVideoModal(null)} />
      )}
    </div>
  );
}
