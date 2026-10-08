'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlayCircle, Trash2, Plus, LogIn, LogOut, ShieldCheck, Key } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/context/LanguageContext';

interface Video {
  id: string;
  title: string;
  video_id: string;
  category: string;
  date: string;
}

export default function WorshipPage() {
  const { t } = useLanguage();
  const [videos, setVideos] = useState<Video[]>([]);
  const [filter, setFilter] = useState('전체');
  
  // 인증 및 관리자 상태
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPinModal, setShowAdminPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // 폼 상태
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCategory, setNewCategory] = useState('주일설교');

  // 사전 등록 관리자 이메일 목록
  const ADMIN_EMAILS = [
    'admin@youngan.or.kr',
    'shinhanchaplain@gmail.com',
    'shinhanchaplain@naver.com',
    'shinhanchaplain@daum.net',
    ...(process.env.NEXT_PUBLIC_ADMIN_EMAILS ? process.env.NEXT_PUBLIC_ADMIN_EMAILS.split(',').map(s => s.trim().toLowerCase()) : [])
  ];

  const checkAdminStatus = (user: any) => {
    if (!user) {
      setIsAdmin(false);
      return;
    }

    const email = user.email?.toLowerCase() || '';
    const isEmailAdmin = ADMIN_EMAILS.includes(email);
    const isMetaAdmin = user.user_metadata?.role === 'admin' || user.user_metadata?.is_admin === true;
    const isPinAuthorized = typeof window !== 'undefined' && localStorage.getItem(`admin_auth_${user.id}`) === 'true';

    if (isEmailAdmin || isMetaAdmin || isPinAuthorized) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    loadVideos();

    // 현재 로그인 세션 확인
    supabase.auth.getUser().then(({ data: { user } }) => {
      setCurrentUser(user);
      checkAdminStatus(user);
    });

    // 로그인 상태 변화 감지
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null;
      setCurrentUser(user);
      checkAdminStatus(user);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setVideos(data);
    }
  };

  const handleAdminPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 마스터 관리자 인증 키: youngan2026
    if (pinInput === 'youngan2026' || pinInput === 'youngan') {
      if (currentUser) {
        localStorage.setItem(`admin_auth_${currentUser.id}`, 'true');
        setIsAdmin(true);
        setShowAdminPinModal(false);
        setPinInput('');
        setPinError('');
        alert(t('관리자 권한이 승인되었습니다.', 'Admin access granted.'));
      }
    } else {
      setPinError(t('비밀번호가 일치하지 않습니다.', 'Incorrect passcode.'));
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setIsAdmin(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) {
      alert(t('관리자 권한이 필요합니다.', 'Admin permission required.'));
      return;
    }

    let videoId = '';
    const match = newUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (match && match[1]) {
      videoId = match[1];
    } else {
      alert(t('올바른 유튜브 링크를 입력해주세요.', 'Please enter a valid YouTube link.'));
      return;
    }

    const { data, error } = await supabase
      .from('videos')
      .insert([
        { title: newTitle, video_id: videoId, category: newCategory }
      ])
      .select();

    if (error) {
      alert(t('등록 중 오류가 발생했습니다.', 'An error occurred during registration.'));
      console.error(error);
    } else if (data) {
      setVideos([data[0], ...videos]);
      setNewTitle('');
      setNewUrl('');
      alert(t('영상이 성공적으로 등록되었습니다.', 'Video registered successfully.'));
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) return;
    if (confirm(t('이 영상을 삭제하시겠습니까?', 'Are you sure you want to delete this video?'))) {
      const { error } = await supabase.from('videos').delete().eq('id', id);
      if (!error) {
        setVideos(videos.filter(v => v.id !== id));
      } else {
        alert(t('삭제 중 오류가 발생했습니다.', 'An error occurred during deletion.'));
      }
    }
  };

  const categories = [
    { key: '전체', label: t('전체', 'All') },
    { key: '주일설교', label: t('주일설교', 'Sunday Sermon') },
    { key: '예배영상', label: t('예배영상', 'Worship Service') },
    { key: '행사및집회', label: t('행사및집회', 'Events & Revival') },
    { key: '교회뉴스', label: t('교회뉴스', 'Church News') },
  ];

  const filteredVideos = filter === '전체' ? videos : videos.filter(v => v.category === filter);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      
      {/* 상단 관리자 / 로그인 상태 바 */}
      <div className="flex justify-end items-center mb-6 text-xs sm:text-sm">
        {currentUser ? (
          <div className="flex items-center gap-3 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            {isAdmin ? (
              <span className="flex items-center text-emerald-700 font-bold gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t('관리자', 'Admin')}: {currentUser.email}
              </span>
            ) : (
              <div className="flex items-center gap-2 text-slate-600">
                <span>{currentUser.email}</span>
                <button
                  type="button"
                  onClick={() => setShowAdminPinModal(true)}
                  className="text-blue-600 hover:text-blue-800 font-bold underline flex items-center gap-1"
                >
                  <Key className="w-3.5 h-3.5" />
                  {t('관리자 인증', 'Verify Admin')}
                </button>
              </div>
            )}
            <button 
              onClick={handleSignOut}
              className="text-slate-400 hover:text-slate-600 ml-1 flex items-center gap-1 font-semibold"
            >
              <LogOut className="w-3.5 h-3.5" />
              {t('로그아웃', 'Sign Out')}
            </button>
          </div>
        ) : (
          <Link 
            href="/login"
            className="flex items-center text-slate-500 hover:text-blue-600 font-semibold transition-colors"
          >
            <LogIn className="w-4 h-4 mr-1"/>
            {t('관리자 로그인', 'Admin Login')}
          </Link>
        )}
      </div>

      {/* 관리자 핀 인증 모달 */}
      {showAdminPinModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {t('영상 관리자 권한 인증', 'Verify Video Admin Access')}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {t('관리자 비밀번호(인증코드)를 입력하여 이 아이디에 영상 관리 권한을 부여합니다.', 
                 'Enter the admin passcode to grant video upload permissions to this account.')}
            </p>
            <form onSubmit={handleAdminPinSubmit} className="space-y-4">
              <input
                type="password"
                placeholder={t('관리자 인증코드 입력', 'Enter passcode')}
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-black font-semibold focus:outline-none focus:border-blue-600"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-red-600 font-semibold">{pinError}</p>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => { setShowAdminPinModal(false); setPinError(''); }}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
                >
                  {t('취소', 'Cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold"
                >
                  {t('인증 완료', 'Verify')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 헤더 타이틀 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          {t('예배와 방송', 'Worship & Media')}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {t('영안장로교회의 은혜로운 말씀과 생생한 사역의 현장을 영상으로 만나보세요.', 
             'Experience the inspiring sermons and ministries of Youngan Presbyterian Church.')}
        </p>
      </div>

      {/* 카테고리 탭 */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
              filter === cat.key 
                ? 'bg-blue-900 text-white shadow-sm' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 관리자 입력 폼 (오직 관리자 인증된 사용자에게만 표시) */}
      {isAdmin && (
        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h3 className="text-base font-bold text-blue-950 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-1 text-blue-700" />
            {t('새 영상 등록하기 (관리자 전용)', 'Register New Video (Admin Only)')}
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-3">
            <select 
              value={newCategory} 
              onChange={e => setNewCategory(e.target.value)}
              className="p-2.5 border border-slate-300 rounded-xl bg-white text-black font-semibold text-sm focus:ring-blue-500 focus:outline-none"
            >
              <option value="주일설교">{t('주일설교', 'Sunday Sermon')}</option>
              <option value="예배영상">{t('예배영상', 'Worship Service')}</option>
              <option value="행사및집회">{t('행사 및 집회', 'Events & Revival')}</option>
              <option value="교회뉴스">{t('교회뉴스', 'Church News')}</option>
            </select>
            <input 
              type="text" 
              placeholder={t('영상 제목을 입력하세요', 'Enter video title')} 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              required
              className="flex-1 p-2.5 border border-slate-300 rounded-xl bg-white text-black font-semibold text-sm focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
            <input 
              type="url" 
              placeholder={t('유튜브 URL (예: https://youtu.be/...)', 'YouTube URL (e.g. https://youtu.be/...)')} 
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              required
              className="flex-1 p-2.5 border border-slate-300 rounded-xl bg-white text-black font-semibold text-sm focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
            <button 
              type="submit" 
              className="bg-blue-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-blue-800 transition text-sm shrink-0 cursor-pointer"
            >
              {t('영상 등록', 'Add Video')}
            </button>
          </form>
        </div>
      )}

      {/* 리스트 (게시판) 형태 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-600 text-sm text-center">
          <div className="col-span-1">{t('번호', 'No.')}</div>
          <div className="col-span-2">{t('분류', 'Category')}</div>
          <div className="col-span-6 text-left">{t('제목 (클릭 시 재생)', 'Title (Click to play)')}</div>
          <div className="col-span-2">{t('등록일', 'Date')}</div>
          {isAdmin && <div className="col-span-1">{t('관리', 'Manage')}</div>}
        </div>
        
        {filteredVideos.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">
            {t('등록된 영상이 없습니다.', 'No videos found.')}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredVideos.map((video, index) => (
              <div key={video.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors">
                <div className="hidden md:block col-span-1 text-center text-gray-400 text-sm font-semibold">
                  {filteredVideos.length - index}
                </div>
                <div className="col-span-12 md:col-span-2 text-center">
                  <span className="inline-block bg-blue-50 text-blue-800 border border-blue-200 text-xs px-2.5 py-1 rounded-full font-bold">
                    {video.category}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                  {/* 작은 썸네일 */}
                  <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer" className="shrink-0 relative w-24 aspect-video rounded-lg overflow-hidden group shadow-xs">
                    <img src={`https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition" alt="썸네일"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </a>
                  {/* 제목 */}
                  <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer" className="text-gray-900 font-semibold hover:text-blue-600 hover:underline line-clamp-2 text-sm leading-snug">
                    {video.title}
                  </a>
                </div>
                <div className="hidden md:block col-span-2 text-center text-gray-500 text-xs font-medium">
                  {video.date || (video as any).created_at?.slice(0, 10)}
                </div>
                {isAdmin && (
                  <div className="col-span-12 md:col-span-1 text-center">
                    <button 
                      onClick={() => handleDelete(video.id)} 
                      title={t('영상 삭제', 'Delete Video')}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
