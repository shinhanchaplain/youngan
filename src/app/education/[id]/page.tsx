import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { trainingCourses } from '@/data/trainingData';
import { ArrowLeft, Clock, User, BookOpen, CheckCircle2, Phone, Calendar, ChevronRight } from 'lucide-react';

interface EducationDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return trainingCourses.map((c) => ({
    id: c.id,
  }));
}

export const instant = false;

export default async function EducationDetailPage({ params }: EducationDetailPageProps) {
  const { id } = await params;
  const course = trainingCourses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 상단 네비게이션 */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/education"
            className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-blue-900 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            교육안내(훈련사역) 전체 목록으로
          </Link>
          <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-900 rounded-full border border-blue-200">
            {course.tag}
          </span>
        </div>

        {/* 본문 카드 */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {course.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {course.summary}
          </p>

          {/* 핵심 정보 박스 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-10">
            <div>
              <span className="font-bold text-slate-400 block text-xs mb-1">교육 대상</span>
              <span className="font-semibold text-slate-800">{course.target}</span>
            </div>
            <div>
              <span className="font-bold text-slate-400 block text-xs mb-1">교육 기간 / 일정</span>
              <span className="font-semibold text-slate-800">{course.scheduleInfo}</span>
            </div>
            <div>
              <span className="font-bold text-slate-400 block text-xs mb-1">담당 교역자 및 강사</span>
              <span className="font-semibold text-slate-800">{course.instructor}</span>
            </div>
            <div>
              <span className="font-bold text-slate-400 block text-xs mb-1">수강 등록 및 문의</span>
              <span className="font-semibold text-slate-800">교회 행정실 (02-3423-0451~5)</span>
            </div>
          </div>

          {/* 세부 교육 내용 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-5 pb-2 border-b border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-900" />
              과정 주요 내용 및 커리큘럼
            </h3>
            <ul className="space-y-4">
              {course.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 신청 안내 배너 */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold mb-1">본 과정에 참여하기를 원하십니까?</h4>
              <p className="text-xs sm:text-sm text-blue-200">
                주일 본당 1층 행정실 또는 온라인 접수를 통해 신청하실 수 있습니다.
              </p>
            </div>
            <a
              href="tel:02-3423-0451"
              className="px-6 py-3 bg-white text-blue-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-50 transition shrink-0 shadow"
            >
              교육 신청 문의 (02-3423-0451)
            </a>
          </div>

        </div>

        {/* 다른 교육 과정 빠른 이동 링크 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <h4 className="text-sm font-bold text-slate-700 mb-4">다른 교육 과정 바로가기</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {trainingCourses.filter((c) => c.id !== course.id).map((c) => (
              <Link
                key={c.id}
                href={`/education/${c.id}`}
                className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-900 rounded-xl text-xs font-bold transition flex items-center justify-between group"
              >
                <span>{c.title}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
