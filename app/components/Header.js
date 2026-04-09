'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Lock, Palette, Brush, Camera, Sun, Film, UserCircle, Star, Video, LayoutDashboard, Settings, Shield, LayoutGrid, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useClerkConfigured } from './ClerkWrapper';
import { useUser, useAuth, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { isAdmin } from '../lib/auth';

function ClerkAuthButtons({ isScrolled }) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const isAdminUser = isSignedIn && isAdmin(user);

  return (
    <div className="hidden lg:flex items-center gap-3">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="px-6 py-2.5 rounded-full font-medium transition-all text-zinc-300 hover:text-white hover:bg-white/[0.06]">
              로그인
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-6 py-2.5 rounded-full font-medium transition-all bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <span className="relative z-10">회원가입</span>
            </button>
          </SignUpButton>
        </>
      ) : (
        <UserButton
          appearance={{ elements: { avatarBox: "w-10 h-10" } }}
          userProfileMode="navigation"
          userProfileUrl="/profile"
        >
          <UserButton.MenuItems>
            <UserButton.Link label="대시보드" labelIcon={<LayoutDashboard size={16} />} href="/dashboard" />
            <UserButton.Link label="프로필 설정" labelIcon={<Settings size={16} />} href="/profile" />
            {isAdminUser && <UserButton.Link label="관리자" labelIcon={<Shield size={16} />} href="/admin" />}
          </UserButton.MenuItems>
        </UserButton>
      )}
    </div>
  );
}

function ClerkMobileAuth({ onMenuClose }) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <>
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="block w-full text-left py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={onMenuClose}>
              로그인
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="w-full py-2.5 px-6 rounded-full font-medium transition-all bg-emerald-500 text-zinc-950 hover:bg-emerald-400" onClick={onMenuClose}>
              회원가입
            </button>
          </SignUpButton>
        </>
      ) : (
        <div className="flex items-center gap-3 py-2">
          <UserButton
            appearance={{ elements: { avatarBox: "w-10 h-10" } }}
            userProfileMode="navigation"
            userProfileUrl="/profile"
          >
            <UserButton.MenuItems>
              <UserButton.Link label="대시보드" labelIcon={<LayoutDashboard size={16} />} href="/dashboard" />
              <UserButton.Link label="프로필 설정" labelIcon={<Settings size={16} />} href="/profile" />
            </UserButton.MenuItems>
          </UserButton>
          <span className="text-zinc-300 font-medium">{user?.fullName || user?.firstName || '내 계정'}</span>
        </div>
      )}
    </>
  );
}

export default function Header({ alwaysScrolled = false }) {
  const clerkConfigured = useClerkConfigured();
  const [isScrolled, setIsScrolled] = useState(alwaysScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [toolbDropdownOpen, setToolbDropdownOpen] = useState(false);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const [lectureDropdownOpen, setLectureDropdownOpen] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guideDropdownOpen && !event.target.closest('.guide-dropdown-container')) {
        setGuideDropdownOpen(false);
      }
      if (toolbDropdownOpen && !event.target.closest('.toolb-dropdown-container')) {
        setToolbDropdownOpen(false);
      }
      if (videoDropdownOpen && !event.target.closest('.video-dropdown-container')) {
        setVideoDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [guideDropdownOpen, toolbDropdownOpen, videoDropdownOpen]);

  const guideItems = [
    { title: '스타일(STYLE)', description: '다양한 아트 스타일', Icon: Palette, href: '/guide?tab=style' },
    { title: '매체(MEDIUM)', description: '다양한 매체 표현', Icon: Brush, href: '/guide?tab=medium' },
    { title: '카메라(CAMERA)', description: '카메라 기법', Icon: Camera, href: '/guide?tab=camera' },
    { title: '조명(LIGHTING)', description: '조명 기법', Icon: Sun, href: '/guide?tab=lighting' },
    { title: '특수기법(COMPOSITION)', description: '구도 및 특수기법', Icon: LayoutGrid, href: '/composition' },
  ];

  const videoItems = [
    { title: '카메라 무브먼트', description: '팬, 틸트, 달리, 트래킹', Icon: Film, href: '/video-guide?sub=카메라 무브먼트' },
    { title: '전환 효과', description: '컷, 페이드, 디졸브, 와이프', Icon: Film, href: '/video-guide?sub=전환 효과' },
    { title: '모션 효과', description: '슬로모션, 타임랩스, 프리즈', Icon: Film, href: '/video-guide?sub=모션 효과' },
  ];

  const toolbItems = [
    { title: '강사소개', description: 'AI TOOLBEE 강사 프로필 및 경력', Icon: UserCircle, href: '/guide/instructor-intro' },
    { title: '강의 후기', description: '수강생들의 생생한 강의 후기', Icon: Star, href: '/guide/instructor-reviews' },
    { title: '동영상 갤러리', description: 'AI TOOLBEE 인트로 및 작품 영상', Icon: Video, href: '/guide/intro-videos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-[30px] px-4 sm:px-6 lg:px-8">
      <div className={`max-w-[95%] mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${isScrolled ? 'bg-white/[0.05] backdrop-blur-xl text-zinc-100 shadow-lg ring-1 ring-white/[0.06]' : 'bg-transparent text-white'}`}>
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold text-white">TBPLUS</span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <div className="relative toolb-dropdown-container">
              <button
                onClick={() => { setToolbDropdownOpen(!toolbDropdownOpen); setGuideDropdownOpen(false); setVideoDropdownOpen(false); }}
                className="flex items-center gap-1 text-sm xl:text-base transition-colors font-semibold whitespace-nowrap text-zinc-300 hover:text-white"
              >
                TOOLB
                <ChevronDown className={`w-4 h-4 transition-transform ${toolbDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolbDropdownOpen && (
                <div className="fixed top-[46px] bg-zinc-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[540px] ring-1 ring-white/[0.08]" style={{ left: '50%', marginLeft: '-270px' }}>
                  <div className="grid grid-cols-3 gap-4">
                    {toolbItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setToolbDropdownOpen(false)}>
                        <div className="bg-white/[0.03] rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 ring-1 ring-white/[0.06] h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-emerald-400 mb-3" />
                          <h3 className="text-sm font-bold text-zinc-100 mb-1 whitespace-nowrap">{item.title}</h3>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative guide-dropdown-container">
              <button
                onClick={() => { setGuideDropdownOpen(!guideDropdownOpen); setToolbDropdownOpen(false); setVideoDropdownOpen(false); }}
                className="flex items-center gap-1 text-sm xl:text-base transition-colors font-semibold whitespace-nowrap text-zinc-300 hover:text-white"
              >
                이미지가이드
                <ChevronDown className={`w-4 h-4 transition-transform ${guideDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {guideDropdownOpen && (
                <div className="fixed top-[46px] bg-zinc-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[900px] ring-1 ring-white/[0.08]" style={{ left: '50%', marginLeft: '-450px' }}>
                  <div className="grid grid-cols-5 gap-4">
                    {guideItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setGuideDropdownOpen(false)}>
                        <div className="bg-white/[0.03] rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 ring-1 ring-white/[0.06] h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-emerald-400 mb-3" />
                          <h3 className="text-sm font-bold text-zinc-100 mb-1">
                            {item.title.includes('(')
                              ? <>{item.title.split('(')[0]}<br /><span className="text-xs font-medium text-zinc-400">({item.title.split('(')[1]}</span></>
                              : item.title}
                          </h3>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative video-dropdown-container">
              <button
                onClick={() => { setVideoDropdownOpen(!videoDropdownOpen); setGuideDropdownOpen(false); setToolbDropdownOpen(false); }}
                className="flex items-center gap-1 text-sm xl:text-base transition-colors font-semibold whitespace-nowrap text-zinc-300 hover:text-white"
              >
                영상가이드
                <ChevronDown className={`w-4 h-4 transition-transform ${videoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {videoDropdownOpen && (
                <div className="fixed top-[46px] bg-zinc-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[540px] ring-1 ring-white/[0.08]" style={{ left: '50%', marginLeft: '-270px' }}>
                  <div className="grid grid-cols-3 gap-4">
                    {videoItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setVideoDropdownOpen(false)}>
                        <div className="bg-white/[0.03] rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 ring-1 ring-white/[0.06] h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-emerald-400 mb-3" />
                          <h3 className="text-sm font-bold text-zinc-100 mb-1 whitespace-nowrap">{item.title}</h3>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => { setLectureDropdownOpen(true); setGuideDropdownOpen(false); setToolbDropdownOpen(false); setVideoDropdownOpen(false); }}
              className="flex items-center gap-1 text-sm xl:text-base transition-colors font-bold whitespace-nowrap text-emerald-400 hover:text-emerald-300"
            >
              영상강의
            </button>

            <Link href="/library" className="text-sm xl:text-base transition-colors font-semibold whitespace-nowrap text-zinc-300 hover:text-white">
              자료실
            </Link>

            <Link href="/#pricing" className="text-sm xl:text-base transition-colors font-semibold whitespace-nowrap text-zinc-300 hover:text-white">
              요금제
            </Link>
          </nav>

          {/* Right section */}
          <div className="hidden lg:flex items-center gap-3">
            {clerkConfigured && <ClerkAuthButtons isScrolled={isScrolled} />}
            <button
              onClick={() => setShowAdminModal(true)}
              className="p-2 rounded-full transition-colors hover:bg-white/[0.06] text-zinc-500"
              title="관리자"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <span className={`block h-0.5 w-6 transition-all bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden absolute left-0 right-0 top-[80px] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-zinc-900/95 backdrop-blur-xl mx-4 rounded-2xl shadow-xl px-6 py-4 space-y-2 ring-1 ring-white/[0.06]">
          <Link href="/guide" className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            이미지가이드
          </Link>
          <Link href="/video-guide" className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            영상가이드
          </Link>
          <a href="/toolblab/main.html" target="_blank" rel="noreferrer" className="block py-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold" onClick={() => setIsMobileMenuOpen(false)}>
            영상강의
          </a>
          <Link href="/composition" className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            특수기법
          </Link>
          <Link href="/library" className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            자료실
          </Link>
          <div className="py-2 space-y-1">
            <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium">TOOLB</p>
            <Link href="/guide/instructor-intro" className="block py-1.5 pl-3 text-zinc-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              강사소개
            </Link>
            <Link href="/guide/instructor-reviews" className="block py-1.5 pl-3 text-zinc-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              강의 후기
            </Link>
            <Link href="/guide/intro-videos" className="block py-1.5 pl-3 text-zinc-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              동영상 갤러리
            </Link>
          </div>
          <Link href="/#pricing" className="block py-2 text-zinc-300 hover:text-emerald-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            요금제
          </Link>
          {clerkConfigured && <ClerkMobileAuth onMenuClose={() => setIsMobileMenuOpen(false)} />}
        </nav>
      </div>

      {/* Admin password modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => { setShowAdminModal(false); setAdminPassword(''); setAdminError(false); }}>
          <div className="bg-zinc-900 rounded-2xl p-6 w-80 shadow-2xl ring-1 ring-white/[0.08]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-zinc-100">관리자 인증</h3>
            </div>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => { setAdminPassword(e.target.value); setAdminError(false); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (adminPassword === '1124') {
                    setShowAdminModal(false);
                    setAdminPassword('');
                    window.location.href = '/admin/bookings';
                  } else {
                    setAdminError(true);
                  }
                }
              }}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 mb-2"
              autoFocus
            />
            {adminError && <p className="text-red-400 text-xs mb-2">비밀번호가 올바르지 않습니다.</p>}
            <button
              onClick={() => {
                if (adminPassword === '1124') {
                  setShowAdminModal(false);
                  setAdminPassword('');
                  window.location.href = '/admin/bookings';
                } else {
                  setAdminError(true);
                }
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* Lecture (영상강의) modal */}
      {lectureDropdownOpen && (
        <div
          className="fixed inset-0 z-[200] flex md:items-center md:justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLectureDropdownOpen(false)}
        >
          <div
            className="relative w-full h-full md:w-[min(1140px,95vw)] md:h-[min(760px,90vh)] bg-zinc-950 md:rounded-3xl shadow-2xl overflow-hidden md:ring-1 md:ring-white/[0.08]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLectureDropdownOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-11 h-11 md:w-10 md:h-10 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white flex items-center justify-center text-2xl leading-none transition-colors ring-1 ring-white/[0.15]"
              aria-label="닫기"
            >
              ×
            </button>
            <iframe
              src="/toolblab/main.html"
              title="영상강의"
              className="w-full h-full bg-white border-0"
            />
          </div>
        </div>
      )}

      {/* Login alert */}
      {showLoginAlert && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-fadeIn">
          <div className="bg-emerald-500 text-zinc-950 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <Lock className="w-6 h-6" />
            <div>
              <p className="font-bold">로그인이 필요합니다</p>
              <p className="text-sm opacity-80">서비스를 이용하려면 로그인해주세요</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
