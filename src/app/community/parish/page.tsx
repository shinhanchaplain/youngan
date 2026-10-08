'use client';

import React from 'react';
import { Users, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ParishPage() {
  const { t } = useLanguage();

  const parishes = [
    { name: t('1교구', 'Parish 1'), pastor: t('변인우 부목사', 'Pastor In-woo Byun'), leader: t('조윤경 교구장', 'Leader Yoon-kyung Cho'), members: t('1,602명', '1,602 members') },
    { name: t('2교구', 'Parish 2'), pastor: t('변인우 부목사', 'Pastor In-woo Byun'), leader: t('조윤경 교구장', 'Leader Yoon-kyung Cho'), members: t('2,437명', '2,437 members') },
    { name: t('3교구', 'Parish 3'), pastor: t('이성문 부목사', 'Pastor Seong-moon Lee'), leader: t('정유미 교구장', 'Leader Yoo-mi Jung'), members: t('1,493명', '1,493 members') },
    { name: t('4교구', 'Parish 4'), pastor: t('이성문 부목사', 'Pastor Seong-moon Lee'), leader: t('정유미 교구장', 'Leader Yoo-mi Jung'), members: t('1,340명', '1,340 members') },
    { name: t('5교구', 'Parish 5'), pastor: t('김종성 부목사', 'Pastor Jong-seong Kim'), leader: t('김은혜 교구장', 'Leader Eun-hye Kim'), members: t('2,336명', '2,336 members') },
    { name: t('6교구', 'Parish 6'), pastor: t('김종성 부목사', 'Pastor Jong-seong Kim'), leader: t('김은혜 교구장', 'Leader Eun-hye Kim'), members: t('1,449명', '1,449 members') },
    { name: t('7교구', 'Parish 7'), pastor: t('김갑중 부목사', 'Pastor Gap-joong Kim'), leader: t('백선희 교구장', 'Leader Seon-hee Baek'), members: t('1,562명', '1,562 members') },
    { name: t('8교구', 'Parish 8'), pastor: t('김갑중 부목사', 'Pastor Gap-joong Kim'), leader: t('백선희 교구장', 'Leader Seon-hee Baek'), members: t('1,717명', '1,717 members') },
    { name: t('9교구', 'Parish 9'), pastor: t('김종성 부목사', 'Pastor Jong-seong Kim'), leader: t('김진하 교구장', 'Leader Jin-ha Kim'), members: t('1,423명', '1,423 members') },
    { name: t('10교구', 'Parish 10'), pastor: t('정준회 부목사', 'Pastor Joon-hoe Jung'), leader: t('김진하 교구장', 'Leader Jin-ha Kim'), members: t('1,877명', '1,877 members') },
    { name: t('청년공동체', 'Young Adult Community'), pastor: t('정준회 부목사', 'Pastor Joon-hoe Jung'), leader: t('김창식 안수집사', 'Deacon Chang-sik Kim'), members: t('청년 1, 2부', 'Young Adults 1 & 2') },
    { name: t('북한선교회', 'North Korea Mission'), pastor: t('한안석 부목사', 'Pastor An-seok Han'), leader: t('임미순 교구장', 'Leader Mi-soon Lim'), members: t('특수 선교', 'Special Missions') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('교구 및 목장 안내', 'Parish & Cell Group Ministry')}
          </h1>
          <p className="text-xl text-gray-500">
            {t('말씀을 나누고 삶을 나누는 사랑의 영안 생명공동체', 'A loving life community sharing God’s Word and daily walk.')}
          </p>
        </div>

        {/* 목장 공동체 소개 배너 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">Life Community</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('생명과 회복이 있는 목장 모임', 'Cell Group Gatherings: Life & Healing')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base break-keep">
                {t(
                  '영안교회는 지역별로 모이는 10개의 장년교구와 240개의 목장이 운영되고 있으며, 청년교구 또한 21개의 목장으로 활발히 모이고 있습니다. 목장은 10~12가정의 성도들이 모여 매주 금요일 말씀을 나누고 교제하며 기도하는 생명공동체입니다.',
                  'Youngan Church operates 10 adult regional parishes and 240 cell groups, as well as 21 active young adult cell groups. Each cell group consists of 10 to 12 families gathering every Friday to share the Word, fellowship, and pray together.'
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-gray-900 block">{t('10개', '10')}</span>
                <span className="text-xs text-gray-500 font-semibold">{t('장년 지역 교구', 'Adult Regional Parishes')}</span>
              </div>
              <div className="bg-green-50/60 p-5 rounded-xl border border-green-100 text-center">
                <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-gray-900 block">{t('240개', '240')}</span>
                <span className="text-xs text-gray-500 font-semibold">{t('사랑의 목장 모임', 'Loving Cell Groups')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 교구별 조직도 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
            {t('교구별 섬김이 현황', 'Parish Leaders & Pastors')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parishes.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4 border-b pb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {item.members}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong className="text-gray-900 font-semibold">{t('담당 목사:', 'Pastor:')}</strong> {item.pastor}</p>
                  <p><strong className="text-gray-900 font-semibold">{t('교구장:', 'Parish Leader:')}</strong> {item.leader}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
