'use client';

import Link from 'next/link';
import { Menu, Search, User, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/church_logo_upscaled.png" 
                alt="영안장로교회 로고" 
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - 5대 대메뉴 구조 */}
          <nav className="hidden md:flex space-x-7">
            {/* 1. 교회소개 */}
            <div className="group relative py-9">
              <span className="text-gray-800 hover:text-slate-900 font-bold cursor-pointer text-lg">
                {t('교회소개', 'About')}
              </span>
              <div className="absolute left-0 top-full mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('교회 비전', 'Church Vision')}
                  </Link>
                  <Link href="/about/greeting" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('목사님 인사말', 'Pastor’s Greeting')}
                  </Link>
                  <Link href="/about/pastor" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('목사님 프로필', 'Pastor Profile')}
                  </Link>
                  <Link href="/about/committee" className="block px-4 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50/60 hover:bg-slate-100">
                    {t('비전위원회', 'Vision Committees')}
                  </Link>
                  <Link href="/about/staff" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('섬기는 분들', 'Ministry Staff')}
                  </Link>
                  <Link href="/about/worship-info" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('예배시간 안내', 'Worship Schedule')}
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('교회 연혁', 'Church History')}
                  </Link>
                  <Link href="/about/directions" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('찾아오시는 길', 'Directions')}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* 2. 예배 방송 */}
            <div className="group relative py-9">
              <span className="text-gray-800 hover:text-slate-900 font-bold cursor-pointer text-lg">
                {t('예배 방송', 'Worship')}
              </span>
              <div className="absolute left-0 top-full mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/worship" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('주일 설교 / 영상', 'Sermons & Media')}
                  </Link>
                  <Link href="/about/worship-info" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('예배 시간표', 'Worship Schedule')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. 공동체 */}
            <div className="group relative py-9">
              <span className="text-gray-800 hover:text-slate-900 font-bold cursor-pointer text-lg">
                {t('공동체', 'Community')}
              </span>
              <div className="absolute left-0 top-full mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/community/parish" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('교구 및 목장', 'Parishes & Cells')}
                  </Link>
                  <Link href="/community/school" className="block px-4 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50/60 hover:bg-slate-100">
                    {t('교회학교', 'Church School')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. 교육안내 */}
            <div className="group relative py-9">
              <span className="text-gray-800 hover:text-slate-900 font-bold cursor-pointer text-lg">
                {t('교육안내', 'Education')}
              </span>
              <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/education" className="block px-4 py-2.5 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200">
                    {t('전체 교육 커리큘럼', 'Curriculum Overview')}
                  </Link>
                  <Link href="/education/new-family" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('새가족모임', 'New Family Gathering')}
                  </Link>
                  <Link href="/education/new-life" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('새생명반', 'New Life Class')}
                  </Link>
                  <Link href="/education/settle" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('정착반', 'Settlement Class')}
                  </Link>
                  <Link href="/education/assurance" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('확신과성숙반', 'Assurance & Growth')}
                  </Link>
                  <Link href="/education/officer" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('제직반', 'Officers Training')}
                  </Link>
                  <Link href="/education/bible" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('성경공부', 'Bible Studies')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. 공지와 소통 */}
            <div className="group relative py-9">
              <span className="text-gray-800 hover:text-slate-900 font-bold cursor-pointer text-lg">
                {t('공지와 소통', 'News & Info')}
              </span>
              <div className="absolute left-0 top-full mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/news" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('교회 소식 / 공지', 'News & Notices')}
                  </Link>
                  <Link href="/news/bulletin" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('온라인 주보', 'Online Bulletin')}
                  </Link>
                  <Link href="/news/sangjo" className="block px-4 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50/60 hover:bg-slate-100">
                    {t('상조정보', 'Funeral & Condolences')}
                  </Link>
                  <Link href="/admin/tax" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900">
                    {t('연말정산 (기부금영수증)', 'Tax Receipt Request')}
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Utilities: 언어 선택 + 검색 + 로그인 */}
          <div className="hidden md:flex items-center space-x-3">
            {/* 언어 선택 토글 버튼 (한국어 / English) */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
              <button
                onClick={() => setLang('ko')}
                className={`px-2 py-0.5 text-xs font-bold rounded-md transition ${
                  lang === 'ko' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                KR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs font-bold rounded-md transition ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>

            {/* 검색 버튼 */}
            <button className="text-gray-500 hover:text-slate-900 p-2" aria-label="검색">
              <Search className="w-5 h-5" />
            </button>

            {/* 로그인 / 회원가입 버튼 (기존 '관리자'에서 교체) */}
            <Link 
              href="/login" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition shadow-xs"
            >
              <User className="w-4 h-4" />
              <span>{t('로그인', 'Sign In')}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="px-2 py-1 bg-slate-100 text-xs font-bold rounded text-slate-700"
            >
              {lang === 'ko' ? 'EN' : 'KR'}
            </button>
            <Link href="/login" className="p-2 text-slate-700">
              <User className="w-5 h-5" />
            </Link>
            <button className="text-gray-500 hover:text-blue-600 p-2" aria-label="메뉴">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
