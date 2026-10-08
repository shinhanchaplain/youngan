'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function GreetingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('목사님 인사말', 'Pastor’s Welcome Message')}
          </h1>
          <p className="text-xl text-blue-600 font-semibold">
            {t('"사랑하고 축복합니다."', '"We Love and Bless You in Christ."')}
          </p>
        </div>

        {/* 인사말 본문 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* 목사님 사진 영역 */}
            <div className="w-full md:w-[360px] flex flex-col items-center shrink-0">
              <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-100">
                <img 
                  src="/images/pastor_clean.jpg" 
                  alt="양병희 담임목사"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="text-center mt-5 w-full">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {t('양병희 담임목사', 'Senior Pastor Byung-hee Yang')}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">
                  {t('영안장로교회 당회장', 'Head of Session, Youngan Presbyterian Church')}
                </p>
                
                <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-left text-sm text-gray-700 leading-relaxed font-medium">
                  <p className="font-bold text-blue-900 mb-1">{t('샬롬!', 'Shalom!')}</p>
                  <p>
                    {t(
                      '저는 영안교회를 담임하는 양병희 목사입니다. 여러분의 영안교회 방문을 주님의 이름으로 환영합니다.',
                      'I am Pastor Byung-hee Yang of Youngan Church. I welcome your visit to our church community in the name of our Lord.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* 본문 내용 */}
            <div className="flex-1 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg break-keep">
              <p>
                {t(
                  '46년 전 하나님의 부름을 받고 12명이 27평 지하에서 영안교회를 개척하여 지금까지 이르고 있습니다. 모든 것이 다 하나님의 은혜입니다.',
                  '46 years ago, called by God, 12 believers began planting Youngan Church in a small 900 sq ft basement. Everything has been by God’s amazing grace.'
                )}
              </p>
              <p>
                {t(
                  '현재 영안교회는 제직 4,518명 등 14,085명의 영안가족이 기쁨으로 하나 되어 섬기고 있습니다.',
                  'Today, Youngan Church is a loving spiritual family of 14,085 members, including 4,518 church officers, serving together in joy.'
                )}
              </p>
              <p>
                {t(
                  '저는 주님께 칭찬받았던 빌라델비아교회를 모델로 삼아 \'균형목회\'란 목회철학과 비전을 향해 모든 성도와 함께 푯대를 향해 믿음으로 달려가고 있습니다.',
                  'Modeled after the faithful Church of Philadelphia praised by Christ, we run toward the goal in faith with our pastoral philosophy of "Balanced Ministry."'
                )}
              </p>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 text-blue-900 font-medium">
                <p>
                  {t(
                    '기도와 말씀을 통한 \'영성목회\', 건강한 영혼과 가정과 사회를 만드는 \'치유목회\', 교육과 훈련을 통해 평신도 지도자를 배출하는 \'교육목회\', 복음통일시대를 준비하고 다음세대를 키우는 \'비전목회\'입니다. 이 비전을 이루기 위해 멈출 수 없는 사명을 감당하고 있습니다.',
                    'This includes Spiritual Ministry through prayer and the Word, Healing Ministry restoring individuals and families, Educational Ministry raising lay leaders, and Vision Ministry preparing for gospel-driven unification and the next generation.'
                  )}
                </p>
              </div>
              <p>
                {t(
                  '영안교회는 하나님을 높이는 성경중심의 교회요, 복음중심의 교회요, 선교중심의 교회요, 또 세상의 어려움에 동참하여 세상을 변화시키기를 원하는 교회입니다. 이제 영안교회는 교회설립 46주년을 디딤돌 삼아 하나님 나라를 향해 50년, 100년의 희망찬 미래를 꿈꾸고 있습니다.',
                  'Youngan Church is Bible-centered, Gospel-centered, and Mission-centered, seeking to transform the world by sharing its burdens. Building on our 46-year foundation, we look forward to a hopeful 50-year and 100-year future for God’s kingdom.'
                )}
              </p>
              <p>
                {t(
                  '우리교회는 기도하실 수 있도록 24시간 대성전을 개방하고 있습니다. 감격과 은혜의 예배에 겸손한 마음으로 당신을 초대합니다. 감사합니다.',
                  'Our Main Sanctuary is open 24 hours a day for your heartfelt prayer. We humbly invite you to experience our vibrant, grace-filled worship. Thank you.'
                )}
              </p>

              <div className="pt-8 border-t border-gray-100 flex flex-col items-end">
                <p className="text-gray-500 text-sm mb-2">
                  {t('영안장로교회 담임목사', 'Senior Pastor of Youngan Presbyterian Church')}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    {t('양 병 희', 'Byung-hee Yang')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
