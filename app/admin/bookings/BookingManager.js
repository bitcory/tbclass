'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, Clock, Lock, Unlock, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const TIME_SLOTS = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '19:00'];
const ADMIN_KEY = 'toolbee2026';

export default function BookingManager() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  // Auth check
  useEffect(() => {
    const saved = sessionStorage.getItem('admin_authed');
    if (saved === '1124') setAuthed(true);
  }, []);

  const handleLogin = () => {
    if (password === '1124') {
      setAuthed(true);
      sessionStorage.setItem('admin_authed', '1124');
    } else {
      setError(true);
    }
  };

  // Fetch booked times when date selected
  useEffect(() => {
    if (!selectedDate) return;
    const dateKey = formatDateKey(selectedDate);
    setLoading(true);
    fetch(`/api/bookings?date=${dateKey}`)
      .then(res => res.json())
      .then(data => setBookedTimes(data.bookedTimes || []))
      .catch(() => setBookedTimes([]))
      .finally(() => setLoading(false));
  }, [selectedDate]);

  function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  function formatDateDisplay(date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  }

  async function toggleSlot(time) {
    const dateKey = formatDateKey(selectedDate);
    const isBooked = bookedTimes.includes(time);
    setActionLoading(time);

    try {
      const res = await fetch('/api/bookings/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({
          date: dateKey,
          times: [time],
          action: isBooked ? 'unblock' : 'block',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setBookedTimes(data.bookedTimes);
      }
    } catch (e) {
      console.error('Toggle failed:', e);
    }
    setActionLoading(null);
  }

  async function blockAll() {
    const dateKey = formatDateKey(selectedDate);
    const available = TIME_SLOTS.filter(t => !bookedTimes.includes(t));
    if (available.length === 0) return;
    setActionLoading('all');
    try {
      const res = await fetch('/api/bookings/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({ date: dateKey, times: available }),
      });
      const data = await res.json();
      if (data.success) setBookedTimes(data.bookedTimes);
    } catch (e) { console.error(e); }
    setActionLoading(null);
  }

  async function unblockAll() {
    const dateKey = formatDateKey(selectedDate);
    if (bookedTimes.length === 0) return;
    setActionLoading('all');
    try {
      const res = await fetch('/api/bookings/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({ date: dateKey, times: [...bookedTimes], action: 'unblock' }),
      });
      const data = await res.json();
      if (data.success) setBookedTimes(data.bookedTimes);
    } catch (e) { console.error(e); }
    setActionLoading(null);
  }

  // Calendar rendering
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  if (!authed) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="bg-zinc-900/70 backdrop-blur-xl rounded-2xl p-8 w-full max-w-sm shadow-2xl border border-white/[0.08]">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-zinc-100">관리자 인증</h2>
            <p className="text-sm text-zinc-500 mt-1">예약 관리 시스템</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="비밀번호"
            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 mb-2"
            autoFocus
          />
          {error && <p className="text-rose-400 text-xs mb-2 font-semibold">비밀번호가 올바르지 않습니다.</p>}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-colors mt-2"
          >
            로그인
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header alwaysScrolled={true} />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2 flex items-center gap-3">
              <Calendar className="w-8 h-8 md:w-9 md:h-9 text-emerald-400" />
              예약 관리
            </h1>
            <p className="text-zinc-500">날짜를 선택하고 시간 슬롯을 차단/해제할 수 있습니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Calendar */}
            <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentMonth(new Date(year, month - 1))}
                  className="p-2 rounded-lg hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-bold text-zinc-100">{year}년 {month + 1}월</h3>
                <button
                  onClick={() => setCurrentMonth(new Date(year, month + 1))}
                  className="p-2 rounded-lg hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
                  <div
                    key={d}
                    className={`text-center text-[11px] font-bold uppercase tracking-wider py-2 ${
                      i === 0 ? 'text-rose-400' : i === 6 ? 'text-blue-400' : 'text-zinc-500'
                    }`}
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, idx) => {
                  if (!day) return <div key={idx} />;
                  const date = new Date(year, month, day);
                  const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
                  const isPast = date < today;
                  const isToday = date.getTime() === today.getTime();

                  return (
                    <button
                      key={idx}
                      onClick={() => !isPast && setSelectedDate(date)}
                      disabled={isPast}
                      className={`aspect-square rounded-xl text-sm font-semibold transition-all ${
                        isSelected
                          ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/30'
                          : isPast
                          ? 'text-zinc-700 cursor-not-allowed'
                          : isToday
                          ? 'text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/30 hover:bg-emerald-500/20'
                          : 'text-zinc-300 hover:bg-white/[0.06]'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/[0.06]">
              {!selectedDate ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-600 py-20">
                  <Clock className="w-12 h-12 mb-3" />
                  <p className="text-sm">날짜를 선택해주세요</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-bold text-zinc-100">{formatDateDisplay(selectedDate)}</h3>
                  </div>

                  {loading ? (
                    <div className="flex items-center justify-center py-20">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500/20 border-t-emerald-400" />
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2 mb-6">
                        {TIME_SLOTS.map(time => {
                          const isBooked = bookedTimes.includes(time);
                          const isLoading = actionLoading === time || actionLoading === 'all';
                          return (
                            <button
                              key={time}
                              onClick={() => toggleSlot(time)}
                              disabled={isLoading}
                              className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all ${
                                isBooked
                                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-300 hover:bg-rose-500/15'
                                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15'
                              } ${isLoading ? 'opacity-50' : ''}`}
                            >
                              <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4" />
                                <span className="font-bold text-base">{time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {isBooked ? (
                                  <>
                                    <span className="text-xs font-bold uppercase tracking-wider">차단됨</span>
                                    <Lock className="w-4 h-4" />
                                  </>
                                ) : (
                                  <>
                                    <span className="text-xs font-bold uppercase tracking-wider">예약 가능</span>
                                    <Unlock className="w-4 h-4" />
                                  </>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={blockAll}
                          disabled={actionLoading === 'all'}
                          className="flex-1 py-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold hover:bg-rose-500/25 transition-colors disabled:opacity-50 text-sm"
                        >
                          전체 차단
                        </button>
                        <button
                          onClick={unblockAll}
                          disabled={actionLoading === 'all'}
                          className="flex-1 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold hover:bg-emerald-500/25 transition-colors disabled:opacity-50 text-sm"
                        >
                          전체 해제
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
