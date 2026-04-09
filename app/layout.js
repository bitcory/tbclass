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

export const metadata = {
  title: "AI TOOLBEE GUIDE",
  description: "AI 창작의 기술을 더하다 - 카메라, 조명, 스타일, 매체 가이드",
  icons: {
    icon: [
      { url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
