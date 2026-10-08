'use client';

import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TrainingPage() {
  const { t } = useLanguage();

  const courses = [
    {
      step: t('1단계', 'Stage 1'),
      title: t('새가족모임', 'New Family Gathering'),
      desc: t('교회에 처음 등록한 성도들을 환영하고 교회의 비전과 기본 신앙을 나누는 첫걸음 모임', 'First-step meeting welcoming newcomers and sharing church vision and fundamental faith.'),
      manager: t('이성문 부목사', 'Pastor Seong-moon Lee')
    },
    {
      step: t('2단계', 'Stage 2'),
      title: t('새생명반', 'New Life Class'),
      desc: t('구원의 확신과 복음의 기초를 단단히 다지는 필수 양육 과정', 'Essential discipleship course solidifying assurance of salvation and gospel foundation.'),
      manager: t('최동철 부목사', 'Pastor Dong-chul Choi')
    },
    {
      step: t('3단계', 'Stage 3'),
      title: t('정착반', 'Integration Class'),
      desc: t('영안공동체의 일원으로서 목장과 예배에 안정적으로 정착하도록 돕는 과정', 'Helping members settle into cell groups and worship as rooted members of Youngan community.'),
      manager: t('최동철 부목사', 'Pastor Dong-chul Choi')
    },
    {
      step: t('4단계', 'Stage 4'),
      title: t('확신과 성숙반', 'Assurance & Maturity Class'),
      desc: t('그리스도인으로서의 정체성과 성숙한 삶의 열매를 맺기 위한 심화 훈련 과정', 'Deepening Christian identity and bearing fruits of mature spiritual living.'),
      manager: t('최동철 부목사, 김종성 부목사', 'Pastor Dong-chul Choi, Pastor Jong-seong Kim')
    },
    {
      step: t('5단계', 'Stage 5'),
      title: t('제직학교반', 'Church Officers School'),
      desc: t('주님의 몸 된 교회를 섬길 충성된 일꾼과 제직을 양성하는 사명자 훈련', 'Equipping faithful servants and officers to lead and serve Christ’s church.'),
      manager: t('최동철 부목사, 김종성 부목사', 'Pastor Dong-chul Choi, Pastor Jong-seong Kim')
    },
    {
      step: t('특별과정', 'Special Course'),
      title: t('성경통독 및 제자반', 'Bible Reading & Discipleship Class'),
      desc: t('성경 66권을 통독하고 하나님의 말씀으로 온전한 삶을 살아내는 평생 성경공부', 'Reading through all 66 books of the Bible to live a life shaped completely by the Word.'),
      manager: t('최동철 부목사', 'Pastor Dong-chul Choi')
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('훈련 및 양육 사역', 'Discipleship & Training')}
          </h1>
          <p className="text-xl text-gray-500">
            {t('그리스도의 장성한 분량에 이르기까지 훈련하는 평신도 양육 체계입니다.', 'Systematic lay discipleship training growing believers to mature stature in Christ.')}
          </p>
        </div>

        {/* 훈련 비전 배너 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10 mb-14">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('평신도를 동역자로 세우는 체계적인 교육과정', 'Equipping Believers as Faithful Ministry Partners')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base break-keep">
                {t(
                  '영안교회는 성도 한 사람 한 사람이 구원의 확신을 얻고 신앙의 성숙을 이루어 하나님의 나라를 위해 헌신하는 충성된 지도자로 세워지도록 단계별 평생 훈련 과정을 운영하고 있습니다.',
                  'Youngan Church provides systematic, lifelong training courses to help every believer gain assurance of salvation, attain spiritual maturity, and rise as faithful leaders dedicated to God’s kingdom.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* 단계별 커리큘럼 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
            {t('단계별 교육 훈련 커리큘럼', 'Curriculum by Stages')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed break-keep mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">{t('담당:', 'Director:')} {item.manager}</span>
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> {t('상시 모집', 'Always Open')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
