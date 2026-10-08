import React from 'react';

export default function HistoryPage() {
  const milestones = [
    {
      period: '2020년대 ~ 현재 : 도약과 부흥',
      events: [
        { date: '2025.01', title: '창립 45주년 신년축복성회', desc: '주제: 꿈꾸며 비상하는 영성 (사 40:31)' },
        { date: '2024.11', title: '창립 45주년 기념 찬양콘서트 및 특별새벽기도회' },
        { date: '2024.10', title: '한국교회 2백만 연합예배 참여 (서울광장)' },
        { date: '2020.10', title: '교회설립 40주년 기념 감사예배 및 임직식' },
      ]
    },
    {
      period: '2010년대 : 비전과 세계선교',
      events: [
        { date: '2019.12', title: '지역사회와 함께하는 성탄 축하 나눔 페스티벌' },
        { date: '2015.01', title: '한국교회연합 대표회장 취임 (양병희 당회장 목사)' },
        { date: '2011.08', title: '비전센터 완공 및 봉헌 감사예배' },
        { date: '2010.10', title: '교회설립 30주년 기념 선교대회 및 전교인 수련회' },
      ]
    },
    {
      period: '2000년대 : 대성전 건축과 균형목회',
      events: [
        { date: '2005.05', title: '새성전 입당 감사예배 및 영안복지관 개관' },
        { date: '2002.10', title: '새성전 기공예배' },
        { date: '2000.10', title: '교회설립 20주년 감사예배' },
      ]
    },
    {
      period: '1980년대 ~ 1990년대 : 개척과 성장',
      events: [
        { date: '1990.10', title: '교회설립 10주년 감사예배 및 장로장립식' },
        { date: '1985.04', title: '신내동 성전 신축 이전' },
        { date: '1980.10.12', title: '영안장로교회 창립예배', desc: '하나님의 부르심을 받아 12명이 27평 지하에서 개척' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">교회 연혁</h1>
          <p className="text-xl text-gray-500">
            하나님의 은혜로 걸어온 영안장로교회 46년의 발자취입니다.
          </p>
        </div>

        {/* 연혁 타임라인 */}
        <div className="space-y-12">
          {milestones.map((sec, sIdx) => (
            <div key={sIdx} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                {sec.period}
              </h2>
              
              <div className="divide-y divide-gray-100">
                {sec.events.map((ev, eIdx) => (
                  <div key={eIdx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <span className="text-sm font-bold text-blue-600 w-28 shrink-0">{ev.date}</span>
                    <div>
                      <h3 className="text-base font-bold text-gray-800">{ev.title}</h3>
                      {ev.desc && <p className="text-sm text-gray-500 mt-1">{ev.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
