'use client';

import React, { useState } from 'react';
import { juboList2026, JuboItem } from '@/data/juboData';
import { Calendar, Download, Eye, X, ChevronRight, BookOpen, Layers } from 'lucide-react';

export default function BulletinPage() {
  const [selectedJubo, setSelectedJubo] = useState<JuboItem | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | 'all'>('all');

  const latestJubo = juboList2026[0];

  const filteredJubos = selectedMonth === 'all'
    ? juboList2026
    : juboList2026.filter((j) => j.month === selectedMonth);

  const months = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Young An Weekly Bulletin
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
            온라인 주보
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            2026년도 주차별 예배 순서지와 목회 소식을 고화질로 확인하고 다운로드하실 수 있습니다.
          </p>
        </div>

        {/* 이번 주 최신 주보 메인 카드 */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-10 mb-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-5 py-1.5 rounded-bl-2xl uppercase tracking-wider">
            금주의 주보 (최신)
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                <span>{latestJubo.date} (제{latestJubo.weekNumber}주)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {latestJubo.title}
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                주일예배 순서, 금주의 성경통독 안내, 교구별 목장 소식 및 교회 주요 공지사항이 수록되어 있습니다.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button 
                  onClick={() => setSelectedJubo(latestJubo)}
                  className="px-6 py-3 bg-white text-blue-950 font-bold rounded-xl hover:bg-blue-50 transition shadow-md flex items-center gap-2 text-sm cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-blue-600" /> 주보 원본 크게보기
                </button>
                <a
                  href={latestJubo.imageUrl}
                  download={`영안교회_주보_${latestJubo.date}.jpg`}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition border border-white/20 flex items-center gap-2 text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" /> 고화질 저장
                </a>
              </div>
            </div>

            {/* 썸네일 미리보기 */}
            <div 
              onClick={() => setSelectedJubo(latestJubo)}
              className="w-48 sm:w-56 aspect-[3/4] bg-white/10 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 cursor-pointer group relative"
            >
              <img 
                src={latestJubo.imageUrl} 
                alt={latestJubo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">
                클릭하여 확대
              </div>
            </div>
          </div>
        </div>

        {/* 2026년도 월별 필터 바 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              2026년 주차별 주보 목록 ({filteredJubos.length}건)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedMonth('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedMonth === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              전체 (1~10월)
            </button>
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedMonth === m
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {m}월
              </button>
            ))}
          </div>
        </div>

        {/* 주보 그리드 카드 목록 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJubos.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col group"
            >
              {/* 이미지 썸네일 */}
              <div 
                onClick={() => setSelectedJubo(item)}
                className="relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-gray-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                  제{item.weekNumber}주
                </div>
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">
                  <Eye className="w-4 h-4 mr-1" /> 자세히 보기
                </div>
              </div>

              {/* 텍스트 및 액션 */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600">{item.date}</span>
                  <h3 className="text-sm font-bold text-gray-900 mt-1 mb-3 line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedJubo(item)}
                    className="flex-1 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition text-center cursor-pointer"
                  >
                    주보 보기
                  </button>
                  <a
                    href={item.imageUrl}
                    download={`영안교회_주보_${item.date}.jpg`}
                    className="p-1.5 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition shrink-0 cursor-pointer"
                    title="이미지 다운로드"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 주보 확대 모달 */}
        {selectedJubo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
              {/* 모달 헤더 */}
              <div className="p-4 px-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selectedJubo.title}</h3>
                  <span className="text-xs text-gray-500">{selectedJubo.date} (제{selectedJubo.weekNumber}주차)</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedJubo.imageUrl}
                    download={`영안교회_주보_${selectedJubo.date}.jpg`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
                  >
                    <Download className="w-3.5 h-3.5" /> 다운로드
                  </a>
                  <button
                    onClick={() => setSelectedJubo(null)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg transition hover:bg-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 모달 이미지 뷰어 */}
              <div className="flex-1 overflow-auto p-4 bg-gray-100 flex justify-center">
                <img 
                  src={selectedJubo.imageUrl} 
                  alt={selectedJubo.title}
                  className="max-w-full h-auto rounded-lg shadow border border-gray-200 object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
