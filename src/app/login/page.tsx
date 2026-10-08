'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { User, Lock, Mail, Phone, Church, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LoginPage() {
  const router = useRouter();
  const { lang, t } = useLanguage();
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [parish, setParish] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              phone: phone,
              parish: parish,
            }
          }
        });

        if (error) throw error;
        setSuccessMsg(t('회원가입이 완료되었습니다! 로그인해 주세요.', 'Sign up successful! Please log in.'));
        setMode('login');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        setSuccessMsg(t('로그인되었습니다.', 'Logged in successfully.'));
        router.push('/');
      }
    } catch (err: any) {
      setErrorMsg(err.message || t('오류가 발생했습니다.', 'An error occurred.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900">
            {mode === 'login' 
              ? t('성도 로그인', 'Member Sign In')
              : t('영안교회 성도 회원가입', 'Member Registration')}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t('온라인 연말정산 기부금영수증 및 교인 전용 서비스를 이용하실 수 있습니다.', 
               'Access online donation tax receipts and member-only services.')}
          </p>
        </div>

        {/* 로그인 / 회원가입 탭 */}
        <div className="flex border-b border-slate-200 mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMsg(null); }}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 text-center transition ${
              mode === 'login'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t('로그인', 'Sign In')}
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setErrorMsg(null); }}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 text-center transition ${
              mode === 'signup'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t('회원가입', 'Sign Up')}
          </button>
        </div>

        {/* 알림 메시지 */}
        {errorMsg && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            {successMsg}
          </div>
        )}

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('이름 (실명)', 'Full Name')}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('홍길동', 'John Doe')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('연락처', 'Phone Number')}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t('소속 교구 / 목장 (선택)', 'Parish / District (Optional)')}
                </label>
                <div className="relative">
                  <Church className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={parish}
                    onChange={(e) => setParish(e.target.value)}
                    placeholder={t('예: 3교구 2목장', 'e.g. Parish 3')}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t('아이디 (이메일 주소)', 'Email Address')}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t('비밀번호', 'Password')}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-slate-900"
              />
            </div>
            {mode === 'signup' && (
              <p className="text-[11px] text-slate-400 mt-1">
                {t('최소 6자리 이상 입력해 주세요.', 'Must be at least 6 characters.')}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition shadow-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>{t('처리 중...', 'Processing...')}</span>
            ) : mode === 'login' ? (
              <>
                <span>{t('로그인하기', 'Sign In')}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>{t('회원가입 완료하기', 'Complete Registration')}</span>
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* 보안 안내 */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-slate-400" />
          <span>{t('영안교회 교인 정보는 안전하게 암호화 관리됩니다.', 'Member information is securely encrypted.')}</span>
        </div>

      </div>
    </div>
  );
}
