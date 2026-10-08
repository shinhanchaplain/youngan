'use client';

import React from 'react';
import { Search, FileText } from 'lucide-react';
import Link from 'next/link';
import { newsList } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';

export default function NewsPage() {
  const { t } = useLanguage();
  const notices = newsList;

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('교회 소식 및 공지', 'Church News & Announcements')}
          </h1>
          <p className="text-xl text-gray-500">
            {t('영안장로교회의 새로운 소식과 안내 사항을 전해드립니다.', 'Latest updates and announcements from Youngan Presbyterian Church.')}
          </p>
        </div>

        {/* 검색 및 필터 바 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600">
              {t(`총 ${notices.length}건의 소식`, `Total ${notices.length} updates`)}
            </span>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder={t('제목 또는 내용 검색', 'Search title or content')} 
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition shrink-0">
              {t('검색', 'Search')}
            </button>
          </div>
        </div>

        {/* 게시판 테이블 */}
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 w-20">{t('번호', 'No.')}</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('제목', 'Title')}</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 w-28">{t('작성자', 'Author')}</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 w-32">{t('작성일', 'Date')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notices.map((n) => (
                <tr key={n.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 text-sm text-center text-gray-500 font-medium">
                    {n.id}
                  </td>
                  <td className="px-6 py-4 text-base font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                        n.type === '공지' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {n.type === '공지' ? t('공지', 'Notice') : t('일반', 'General')}
                      </span>
                      <Link 
                        href={`/news/${n.id}`} 
                        className="hover:text-blue-600 transition flex items-center gap-1.5"
                      >
                        <span>{n.title}</span>
                        {n.hasFile && (
                          <FileText className="w-4 h-4 text-blue-500 inline shrink-0" />
                        )}
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">
                    {n.author === '관리자' ? t('관리자', 'Admin') : n.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-400">
                    {n.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이징 네비게이션 */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <button className="px-3 py-1.5 rounded border border-gray-200 bg-white text-sm font-bold text-blue-600">1</button>
        </div>

      </div>
    </div>
  );
}
