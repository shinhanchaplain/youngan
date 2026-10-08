'use client';

import React from 'react';
import Link from 'next/link';
import { trainingCourses } from '@/data/trainingData';
import { GraduationCap, ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EducationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Discipleship & Education
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            {t('교육안내 (훈련사역)', 'Discipleship & Education')}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t(
              '영안장로교회는 \'교육목회\'를 통해 새가족부터 평신도 지도자까지 말씀과 훈련으로 건강한 예수 그리스도의 제자를 양성합니다.',
              'Through Educational Ministry, Youngan Presbyterian Church raises healthy disciples of Jesus Christ from newcomers to lay leaders through the Word and training.'
            )}
          </p>
        </div>

        {/* 훈련 체계도 로드맵 */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs mb-14">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-900" />
            <h2 className="text-2xl font-bold text-slate-900">
              {t('영안 평신도 훈련 커리큘럼 로드맵', 'Youngan Lay Discipleship Curriculum Roadmap')}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {trainingCourses.map((c, idx) => (
              <Link
                key={c.id}
                href={`/education/${c.id}`}
                className="bg-slate-50 hover:bg-blue-900 hover:text-white rounded-2xl p-4 border border-slate-200 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-200 block mb-1">
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-white mb-1">
                    {c.title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-blue-100 font-medium mt-2">
                  {c.duration}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 상세 과정 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingCourses.map((course, idx) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-900 rounded-full border border-blue-200">
                    {course.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {t(`과정 0${idx + 1}`, `Course 0${idx + 1}`)}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {course.summary}
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400 shrink-0" />
                    <span><strong>{t('대상:', 'Target:')}</strong> {course.target}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span><strong>{t('기간/일정:', 'Schedule:')}</strong> {course.scheduleInfo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <span><strong>{t('담당:', 'Leader:')}</strong> {course.instructor}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/education/${course.id}`}
                className="w-full py-3 bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>{t(`${course.title} 세부 안내 및 신청`, `View Details & Register for ${course.title}`)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
