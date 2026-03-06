'use client';

import { UserProfile } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';
import { useClerkConfigured } from '../components/ClerkWrapper';

export default function ProfileContent() {
  const clerkConfigured = useClerkConfigured();
  if (!clerkConfigured) return <ProfileNoAuth />;
  return <ProfileInner />;
}

function ProfileNoAuth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header alwaysScrolled={true} />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-xl text-gray-600">인증 서비스를 사용할 수 없습니다.</p>
        </div>
      </main>
    </div>
  );
}

function ProfileInner() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">프로필 설정</h1>

          <div className="flex justify-center">
            <UserProfile
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-xl border border-gray-200",
                }
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
