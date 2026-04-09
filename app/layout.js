import localFont from "next/font/local";
import "./globals.css";
import AmbientBackground from "./components/AmbientBackground";
import ClerkWrapper from "./components/ClerkWrapper";

const paperlogy = localFont({
  src: [
    { path: "./fonts/Paperlogy-1Thin.woff", weight: "100", style: "normal" },
    { path: "./fonts/Paperlogy-2ExtraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/Paperlogy-3Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Paperlogy-4Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Paperlogy-5Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Paperlogy-6SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Paperlogy-7Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/Paperlogy-8ExtraBold.woff", weight: "800", style: "normal" },
    { path: "./fonts/Paperlogy-9Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-paperlogy",
});

// ─── Site constants ─────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tbplus.vercel.app';
const SITE_NAME = 'TBPLUS';
const SITE_TITLE = 'TB의 영상제작소 TBPLUS';
const SITE_DESCRIPTION =
  'AI 영상 제작의 모든 것. TB의 영상제작소 TBPLUS는 마스터 이미지부터 1분 영상, 인트로, 광고, 유튜브 수익화까지 5단계 커리큘럼으로 초보자를 전문가로 성장시킵니다.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'TBPLUS',
    'TB의 영상제작소',
    'TOOLB LAB',
    'AI 영상 제작',
    'AI 영상 강의',
    'AI 이미지 생성',
    '1분 영상 만들기',
    '유튜브 수익화',
    '인트로 영상 제작',
    '광고 영상 제작',
    '미드저니 강의',
    'Sora',
    'Veo',
    'Runway',
    '카메라 기법',
    '조명 기법',
    '시네마틱 영상',
    '영상 편집 강의',
  ],
  authors: [{ name: 'TOOLB LAB', url: SITE_URL }],
  creator: 'TOOLB LAB',
  publisher: 'TOOLB LAB',
  category: 'education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/images/favicon_io/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/images/favicon_io/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/images/favicon_io/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1870,
        height: 982,
        alt: 'TB PLUS - AI 창작의 기술을 더하다',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        alt: 'TB PLUS - AI 창작의 기술을 더하다',
      },
    ],
    creator: '@toolblab',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ko-KR': SITE_URL,
    },
  },
  other: {
    'naver-site-verification': '',
    'google-site-verification': '',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
    { media: '(prefers-color-scheme: light)', color: '#050505' },
  ],
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <ClerkWrapper>
      <html lang="ko">
        <body suppressHydrationWarning className={`${paperlogy.variable} font-sans antialiased bg-[#050505] text-zinc-100`}>
          {/*
            Strip browser-extension attributes (Bitdefender's `bis_skin_checked`,
            Grammarly, etc.) before React hydrates so they don't cause hydration
            mismatches. Inline so it runs as early as possible during HTML parse.
          */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var ATTRS=['bis_skin_checked','bis_register','__processed_'];function clean(el){if(!el||!el.getAttributeNames)return;var names=el.getAttributeNames();for(var i=0;i<names.length;i++){var n=names[i];for(var j=0;j<ATTRS.length;j++){if(n===ATTRS[j]||n.indexOf(ATTRS[j])===0){el.removeAttribute(n);break;}}}}function sweep(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)clean(all[i]);}sweep();try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==='attributes')clean(m.target);else if(m.type==='childList'&&m.addedNodes){for(var k=0;k<m.addedNodes.length;k++){var n=m.addedNodes[k];if(n.nodeType===1){clean(n);if(n.getElementsByTagName){var d=n.getElementsByTagName('*');for(var l=0;l<d.length;l++)clean(d[l]);}}}}}}).observe(document.documentElement,{attributes:true,subtree:true,childList:true});}catch(e){}})();`,
            }}
          />
          <AmbientBackground />
          <div className="relative z-10">
            {children}
          </div>
        </body>
      </html>
    </ClerkWrapper>
  );
}
