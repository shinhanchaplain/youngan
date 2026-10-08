'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      {/* 히어로 섹션 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          {t('교회 비전', 'Church Vision')}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t('경건습관을 훈련하는 영안공동체 (딤전 4:7-8)', 'A Youngan Community Training in Godliness (1 Tim 4:7-8)')}
        </p>
      </section>

      {/* 비전 소개 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t(
              '영안장로교회는 성령으로 충만하여 훈련된 평신도와 중직자들을 중심으로 위대한 계명을 실천하고 세상을 변화시키는 교회로 발돋움하기 위하여',
              'Filled with the Holy Spirit and centered on trained lay leaders and officers, Youngan Presbyterian Church strives to fulfill the Great Commission and transform the world through:'
            )}
            <strong className="text-blue-600 block mt-2 text-2xl">
              {t('"경건습관을 훈련하는 영안공동체"', '"A Youngan Community Training in Godliness"')}
            </strong>
            {t('라는 목표를 정하고 힘차게 전진하고 있습니다.', 'advancing forward faithfully toward this goal.')}
          </p>
        </div>
      </section>

      {/* 1. 영안교회의 비전과 사명 테이블 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          {t('영안교회의 비전과 사명', 'Vision & Mission of Youngan Church')}
        </h2>
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">
                  {t('영안교회는?', 'Who We Are')}
                </th>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">
                  {t('비전 (Vision)', 'Vision')}
                </th>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">
                  {t('3대 전략', '3 Key Strategies')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 그리스도의 몸', '1. Body of Christ')}<br/>
                  {t('2. 복음의 일꾼', '2. Workers of the Gospel')}<br/>
                  {t('3. 교회의 일꾼', '3. Workers of the Church')}<br/>
                  {t('4. 하나님의 사람으로 세움', '4. Raising Men & Women of God')}
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 성령충만', '1. Fullness of the Spirit')}<br/>
                  {t('2. 확실한 신앙고백', '2. Confident Confession of Faith')}<br/>
                  {t('3. 고지 선점 (인물 양성)', '3. Raising Influential Leaders')}<br/>
                  {t('4. 복음통일시대 준비', '4. Preparing for Gospel Unification')}
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 나이테 전략 (신앙 중심 흡수)', '1. Concentric Ring Strategy')}<br/>
                  {t('2. 평생 교육 (교회 일꾼 성장)', '2. Lifelong Discipleship')}<br/>
                  {t('3. 평신도 사역 (은사 발견/파견)', '3. Lay Ministry (Gifts & Deployment)')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 4대 균형 목회 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          {t('4대 균형 목회', '4-Fold Balanced Ministry')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 영성목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {t('영성목회', 'Spiritual Ministry')}
            </h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>{t('• 하나님과의 교제 회복 (예배 회복)', '• Fellowship with God (Worship Renewal)')}</li>
              <li>{t('• 기도 회복 (기도운동 활성화)', '• Prayer Renewal (Prayer Movement)')}</li>
            </ul>
          </div>

          {/* 치유목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {t('치유목회', 'Healing Ministry')}
            </h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>{t('• 영육간의 전인적 치유', '• Holistic Healing of Body & Soul')}</li>
              <li>{t('• 가정 관심/사랑/행복 프로그램', '• Healthy Family & Marriage Ministries')}</li>
              <li>{t('• 사회적 치유 및 이웃 돌보기', '• Community Care & Outreach')}</li>
            </ul>
          </div>

          {/* 교육목회 요약 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {t('교육목회', 'Educational Ministry')}
            </h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>{t('• 1단계: 복음전파 (전도)', '• Stage 1: Evangelism')}</li>
              <li>{t('• 2단계: 구원의 확신 (양육)', '• Stage 2: Assurance of Salvation')}</li>
              <li>{t('• 3단계: 신앙성숙 (성숙)', '• Stage 3: Spiritual Maturity')}</li>
              <li>{t('• 4단계: 리더십 양성 (지도자)', '• Stage 4: Leadership Multiplication')}</li>
            </ul>
          </div>

          {/* 비전목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {t('비전목회', 'Vision Ministry')}
            </h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>{t('• 국내 선교 지원', '• Domestic Mission Support')}</li>
              <li>{t('• 국외 선교 파송 및 후원', '• World Missions Sending & Support')}</li>
              <li>{t('• 복음통일시대 준비', '• Preparing for Gospel Unification')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 교육목회 단계별 훈련 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          {t('교육목회 단계별 훈련', 'Step-by-Step Discipleship Training')}
        </h2>
        
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 mb-12">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  {t('전도', 'Evangelism')}<br/>
                  <span className="text-sm font-semibold text-blue-600">
                    {t('1단계: 복음전파', 'Stage 1: Gospel Outreach')}
                  </span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  {t('양육', 'Nurture')}<br/>
                  <span className="text-sm font-semibold text-blue-600">
                    {t('2단계: 구원의 확신', 'Stage 2: Assurance')}
                  </span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  {t('성숙', 'Maturity')}<br/>
                  <span className="text-sm font-semibold text-blue-600">
                    {t('3단계: 신앙성숙', 'Stage 3: Spiritual Growth')}
                  </span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  {t('지도자(재생산)', 'Leadership')}<br/>
                  <span className="text-sm font-semibold text-blue-600">
                    {t('4단계: 리더쉽 양성', 'Stage 4: Leader Multiplication')}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 태신자 작정 및 전도교육', '1. Prospective Believer Outreach')}<br/>
                  {t('2. 전도특공대 및 기도특공대', '2. Evangelism & Prayer Teams')}<br/>
                  {t('3. 새가족반 기초과정 (세례필수과정)', '3. New Believer Basics (Baptism Prep)')}
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 새생명반', '1. New Life Class')}<br/>
                  {t('2. 정착반', '2. Integration Class')}
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 확신과 성숙반', '1. Assurance & Maturity Class')}<br/>
                  {t('2. 제직학교반', '2. Church Officers School')}<br/>
                  {t('3. 성경통독반', '3. Bible Reading Class')}<br/>
                  {t('4. 성경일독반', '4. One-Year Bible Class')}<br/>
                  {t('5. Q.T반', '5. Quiet Time (QT) Class')}
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  {t('1. 목자세미나', '1. Shepherd (Cell Leader) Seminar')}<br/>
                  {t('2. 헌신자 훈련', '2. Consecrated Servant Training')}<br/>
                  {t('3. 중직자 세미나', '3. Senior Officer Seminar')}<br/>
                  {t('4. 제직 세미나', '4. Deacons Seminar')}<br/>
                  {t('5. 필요한 재교육', '5. Continuing Education')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 목회자를 돕는 평생프로그램 */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b text-center md:text-left">
            {t('목회자를 돕는 평생프로그램', 'Lifelong Ministry Partnership Program')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">
                {t('1단계', 'Stage 1')}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {t('구원상담', 'Salvation Counseling')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('새가족 등록 후 목회자 접견', 'Pastor meeting upon new member registration')}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">
                {t('2단계', 'Stage 2')}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {t('새가족반', 'New Family Class')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('기초1 과정 및 정착 훈련', 'Basic course 1 & settling training')}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">
                {t('3단계', 'Stage 3')}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {t('훈련반', 'Discipleship Class')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('확신반 및 제직학교반', 'Assurance & Officers class')}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">
                {t('4단계', 'Stage 4')}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {t('지도자반', 'Leadership Class')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('봉사 및 리더십 지도자 훈련', 'Service & leadership ministry training')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
