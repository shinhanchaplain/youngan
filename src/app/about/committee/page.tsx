import React from 'react';
import { visionCommittees } from '@/data/committeeData';
import { CheckCircle2, User } from 'lucide-react';

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-300">
            Vision Committees
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            비전위원회 안내
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            영안장로교회는 담임목사님의 '균형목회' 비전을 실현하기 위해 <strong>8개의 전문 비전위원회</strong>를 구성하여 교회의 모든 사역을 은혜와 질서 가운데 감당하고 있습니다.
          </p>
        </div>

        {/* 8대 위원회 그리드 (각 위원회 사역 대표 사진 및 위원장 프로필 반영) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionCommittees.map((com, idx) => (
            <div 
              key={com.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* 상단 위원회 사역 비전 사진 */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={com.bannerImage} 
                    alt={com.name} 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-xs font-black px-3 py-1 bg-white/90 text-slate-900 rounded-lg backdrop-blur-xs">
                      제 0{idx + 1} 위원회
                    </span>
                    <span className="text-xs text-white font-bold bg-slate-900/70 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                      당회 산하 기구
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-2xl font-black drop-shadow-md">
                      {com.name}
                    </h3>
                  </div>
                </div>

                {/* 본문 정보 */}
                <div className="p-7">
                  <p className="text-sm font-bold text-slate-800 mb-3">
                    {com.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {com.description}
                  </p>

                  {/* 주요 사역 과제 */}
                  <div className="bg-slate-50 rounded-2xl p-5 mb-2 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-slate-700" />
                      주요 담당 사역
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {com.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-start gap-1.5">
                          <span className="text-slate-400">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 섬기는 분들 (위원장 사진 및 담당자) */}
              <div className="px-7 py-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  {com.leaderPhoto ? (
                    <img 
                      src={com.leaderPhoto} 
                      alt={com.leader} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 shadow-xs shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block">위원장</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {com.leader}
                    </span>
                  </div>
                </div>

                {com.subLeaders.length > 0 && (
                  <div className="text-right text-slate-500">
                    <span className="text-[11px] font-bold text-slate-400 block">담당 임원</span>
                    <span className="font-medium text-slate-700">{com.subLeaders.join(', ')}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
