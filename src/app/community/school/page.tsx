'use client';

import React from 'react';
import Link from 'next/link';
import { schoolDepartments } from '@/data/schoolData';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SchoolPage() {
  const { t } = useLanguage();
  const departments = schoolDepartments;

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Next Generation
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            {t('교회학교 안내', 'Sunday School & Youth')}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t(
              '믿음의 다음세대를 성경적 가치관으로 세우는 영안장로교회 교회학교 9개 부서입니다.',
              '9 Sunday school departments at Youngan Presbyterian Church raising the next generation on biblical values.'
            )}
          </p>
        </div>

        {/* 교육 비전 카드 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 mb-14 text-center shadow-xs">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-2">Next Generation Vision</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            {t('"경건습관을 훈련하는 다음세대" (딤전 4:7-8)', '"A Next Generation Training in Godliness" (1 Tim 4:7-8)')}
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-base break-keep">
            {t(
              '어린 시절부터 말씀과 기도로 훈련받아 하나님을 경외하고 세상을 변화시키는 영적 리더로 자라나도록 전문 교역자와 교사들이 사랑으로 양육하고 있습니다.',
              'Our pastoral staff and teachers lovingly nurture children from an early age through the Word and prayer, equipping them to become spiritual leaders who revere God and transform the world.'
            )}
          </p>
        </div>

        {/* 부서별 카드 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            {t('교회학교 9개 부서 안내', '9 Sunday School Departments')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-bold text-slate-900">{dept.name}</h3>
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {dept.age}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-5">
                    {dept.time} · {dept.location}
                  </p>
                  
                  {/* 교역자 & 담당자 사진 및 프로필 */}
                  <div className="grid grid-cols-2 gap-3 pt-2 mb-6">
                    <div className="text-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border border-slate-200 shadow-xs bg-white">
                        <img src={dept.pastorPhoto} alt={dept.pastor} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] font-bold text-blue-900">{t('교역자', 'Pastor')}</p>
                      <p className="text-xs font-extrabold text-slate-900 mt-0.5">{dept.pastor}</p>
                    </div>

                    <div className="text-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border border-slate-200 shadow-xs bg-white">
                        <img src={dept.managerPhoto} alt={dept.manager} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[11px] font-bold text-slate-500">{t('부장/담당', 'Director')}</p>
                      <p className="text-xs font-extrabold text-slate-900 mt-0.5">{dept.manager}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/community/school/${dept.id}`}
                  className="w-full py-2.5 bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{t(`${dept.name} 상세 안내 및 프로그램`, `View ${dept.name} Details`)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
