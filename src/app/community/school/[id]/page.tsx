import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { schoolDepartments } from '@/data/schoolData';
import { ArrowLeft, Clock, MapPin, User, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface SchoolDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return schoolDepartments.map((d) => ({
    id: d.id,
  }));
}

export const instant = false;

export default async function SchoolDetailPage({ params }: SchoolDetailPageProps) {
  const { id } = await params;
  const dept = schoolDepartments.find((d) => d.id === id);

  if (!dept) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 상단 네비게이션 */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/community/school"
            className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-blue-900 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            교회학교 전체 부서 목록으로
          </Link>
          <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-900 rounded-full border border-blue-200">
            {dept.age}
          </span>
        </div>

        {/* 본문 카드 */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            영안장로교회 교회학교
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {dept.name}
          </h1>
          <p className="text-lg font-semibold text-blue-900 mb-6">
            "{dept.motto}"
          </p>
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            {dept.targetVision}
          </p>

          {/* 예배 시간 및 장소 안내 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-10">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-900 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-slate-400">예배 시간</span>
                <span className="font-semibold text-slate-800">{dept.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-900 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-slate-400">예배 장소</span>
                <span className="font-semibold text-slate-800">{dept.location}</span>
              </div>
            </div>
          </div>

          {/* 섬기는 분들 (교역자 및 부장) */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
              섬기는 교역자 및 부서 임원
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-white border border-slate-200">
                  <img src={dept.pastorPhoto} alt={dept.pastor} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-900 block mb-0.5">담당 교역자</span>
                  <h4 className="text-lg font-extrabold text-slate-900">{dept.pastor}</h4>
                  <p className="text-xs text-slate-500 mt-1">말씀 선포 및 부서 총괄</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-white border border-slate-200">
                  <img src={dept.managerPhoto} alt={dept.manager} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block mb-0.5">부장 / 담당 임원</span>
                  <h4 className="text-lg font-extrabold text-slate-900">{dept.manager}</h4>
                  <p className="text-xs text-slate-500 mt-1">부서 행정 및 교사 헌신</p>
                </div>
              </div>
            </div>
          </div>

          {/* 주요 연간 및 주간 프로그램 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-5 pb-2 border-b border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              주요 교육 프로그램 및 사역
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dept.programs.map((prog, idx) => (
                <div key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-900 shrink-0"></span>
                  <span className="text-sm font-semibold text-slate-700">{prog}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 다른 부서 바로가기 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <h4 className="text-sm font-bold text-slate-700 mb-4">다른 교회학교 부서 바로가기</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {schoolDepartments.filter((d) => d.id !== dept.id).map((d) => (
              <Link
                key={d.id}
                href={`/community/school/${d.id}`}
                className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-900 rounded-xl text-xs font-bold transition flex items-center justify-between group"
              >
                <span>{d.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
