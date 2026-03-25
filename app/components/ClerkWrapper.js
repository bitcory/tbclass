'use client';

import { createContext, useContext } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { koKR } from '@clerk/localizations';
import { dark } from '@clerk/themes';

const ClerkConfigContext = createContext(false);

export function useClerkConfigured() {
  return useContext(ClerkConfigContext);
}

const isClerkConfigured = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder')
);

export default function ClerkWrapper({ children }) {
  if (!isClerkConfigured) {
    return (
      <ClerkConfigContext.Provider value={false}>
        {children}
      </ClerkConfigContext.Provider>
    );
  }

  return (
    <ClerkConfigContext.Provider value={true}>
      <ClerkProvider
        localization={koKR}
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: '#10b981',
            colorBackground: '#0a0a0a',
            colorInputBackground: '#171717',
            colorText: '#f4f4f5',
          },
          elements: {
            footer: "hidden",
            card: "bg-zinc-900 border border-white/[0.06]",
          }
        }}
      >
        {children}
      </ClerkProvider>
    </ClerkConfigContext.Provider>
  );
}
