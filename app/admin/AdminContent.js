'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useClerkConfigured } from '../components/ClerkWrapper';
import { isAdmin } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, UserCheck, Clock, ShieldX, Shield } from 'lucide-react';

export default function AdminContent() {
  const clerkConfigured = useClerkConfigured();
  if (!clerkConfigured) return null;
  return <AdminInner />;
}

function AdminInner() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const isAdminUser = isLoaded && isSignedIn && isAdmin(user);

  useEffect(() => {
    if (isLoaded && !isAdminUser) {
      router.push('/');
    }
  }, [isLoaded, isAdminUser, router]);

  useEffect(() => {
    if (isAdminUser) {
      fetchUsers();
    }
  }, [isAdminUser]);

  async function fetchUsers() {
    try {
      const res = await fetch('/api/admin/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAction(userId, action) {
    setActionLoading(`${userId}-${action}`);
    try {
      const res = await fetch(`/api/admin/users/${userId}/${action}`, { method: 'POST' });
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId ? { ...u, role: action === 'approve' ? 'approved' : 'rejected' } : u
          )
        );
      }
    } catch (err) {
      console.error(`Failed to ${action} user:`, err);
    } finally {
      setActionLoading(null);
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-emerald-500/20 border-t-emerald-400" />
      </div>
    );
  }

  if (!isAdminUser) return null;

  const stats = {
    total: users.length,
    pending: users.filter((u) => u.role === 'pending' && !u.isSuperAdmin).length,
    approved: users.filter((u) => u.role === 'approved' || u.isSuperAdmin).length,
    rejected: users.filter((u) => u.role === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 md:w-9 md:h-9 text-emerald-400" />
              관리자 대시보드
            </h1>
            <p className="text-zinc-500">사용자 승인 및 권한 관리</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={<Users className="w-5 h-5 text-blue-400" />}
              label="전체 사용자"
              value={stats.total}
              valueClass="text-zinc-100"
            />
            <StatCard
              icon={<Clock className="w-5 h-5 text-amber-400" />}
              label="승인 대기"
              value={stats.pending}
              valueClass="text-amber-400"
            />
            <StatCard
              icon={<UserCheck className="w-5 h-5 text-emerald-400" />}
              label="승인됨"
              value={stats.approved}
              valueClass="text-emerald-400"
            />
            <StatCard
              icon={<ShieldX className="w-5 h-5 text-rose-400" />}
              label="거부됨"
              value={stats.rejected}
              valueClass="text-rose-400"
            />
          </div>

          {/* Users table */}
          <div className="bg-zinc-900/50 rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 border-b border-white/[0.06] px-6 py-4">
              <h2 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                사용자 목록
              </h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-emerald-500/20 border-t-emerald-400" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-white/[0.06]">
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500">사용자</th>
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500">이메일</th>
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500">가입일</th>
                      <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500">상태</th>
                      <th className="text-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500">작업</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={u.imageUrl}
                              alt=""
                              className="w-9 h-9 rounded-full object-cover ring-1 ring-white/[0.08]"
                            />
                            <span className="font-semibold text-zinc-100">
                              {u.firstName} {u.lastName}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{u.email}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                          {new Date(u.createdAt).toLocaleDateString('ko-KR')}
                        </td>
                        <td className="px-6 py-4">
                          <RoleBadge role={u.isSuperAdmin ? 'admin' : u.role} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          {u.isSuperAdmin ? (
                            <span className="text-xs text-zinc-600">슈퍼 관리자</span>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleAction(u.id, 'approve')}
                                disabled={u.role === 'approved' || actionLoading === `${u.id}-approve`}
                                className="px-3 py-1.5 text-xs font-bold rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30"
                              >
                                {actionLoading === `${u.id}-approve` ? '...' : '승인'}
                              </button>
                              <button
                                onClick={() => handleAction(u.id, 'reject')}
                                disabled={u.role === 'rejected' || actionLoading === `${u.id}-reject`}
                                className="px-3 py-1.5 text-xs font-bold rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-rose-500/15 text-rose-300 hover:bg-rose-500/25 border border-rose-500/30"
                              >
                                {actionLoading === `${u.id}-reject` ? '...' : '거부'}
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                    {users.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-16 text-center text-zinc-600 text-sm">
                          사용자가 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ icon, label, value, valueClass }) {
  return (
    <div className="bg-zinc-900/50 rounded-2xl p-5 border border-white/[0.06] hover:bg-zinc-900/70 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className={`text-3xl font-bold ${valueClass}`}>{value}</p>
    </div>
  );
}

function RoleBadge({ role }) {
  const styles = {
    admin: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    approved: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    pending: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    rejected: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  };
  const labels = {
    admin: '관리자',
    approved: '승인됨',
    pending: '대기 중',
    rejected: '거부됨',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full border ${styles[role] || styles.pending}`}>
      {labels[role] || labels.pending}
    </span>
  );
}
