'use client';

import React from 'react';
import PastorImageSwitcher from '@/components/about/PastorImageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function PastorProfilePage() {
  const { t } = useLanguage();

  const education = [
    { ko: '고려대학교 문학사', en: 'B.A. in Literature, Korea University' },
    { ko: '고려대학교 정치학석사', en: 'M.A. in Political Science, Korea University' },
    { ko: '백석대학교 신학대학원(구 기독신학원) 졸업', en: 'M.Div., Baekseok Theological Seminary' },
    { ko: '감리교 신학대학교 선교대학원 졸업', en: 'Graduate School of Mission, Methodist Theological University' },
    { ko: '美 캘리포니아신학대학원 목회학박사 (D.Min)', en: 'D.Min., California Graduate School of Theology (USA)' },
    { ko: '백석대학교 행정학 박사 (Ph.D)', en: 'Ph.D. in Public Administration, Baekseok University' },
    { ko: '백석대학교 명예신학박사', en: 'Honorary D.D., Baekseok University' },
    { ko: '美 고든콘웰 신학대학원 명예철학박사', en: 'Honorary Ph.D., Gordon-Conwell Theological Seminary (USA)' },
  ];

  const career = [
    { ko: '現 영안장로교회 당회장', en: 'Current Senior Pastor / Moderator, Youngan Presbyterian Church' },
    { ko: '現 (사)동북아한민족협의회 대표회장', en: 'Current Representative President, Northeast Asia Korean Council' },
    { ko: '現 영안복지재단 이사장', en: 'Current Chairman of the Board, Youngan Welfare Foundation' },
    { ko: '現 기독교연합신문사 대표이사', en: 'Current CEO & President, The Christian Coalition News' },
    { ko: '現 백석대학교 실천신학대학원장', en: 'Current Dean, Graduate School of Practical Theology, Baekseok University' },
    { ko: '現 백석예술대학교 서울백석학원 이사장', en: 'Current Chairman of the Board, Seoul Baekseok Educational Foundation' },
    { ko: '한국교회연합 4대 대표회장', en: 'Former 4th President, The Communion of Churches in Korea' },
    { ko: '한국장로교총연합회 28대 대표회장', en: 'Former 28th President, The Council of Presbyterian Churches in Korea' },
    { ko: '대한예수교장로회(백석) 증경총회장', en: 'Former General Assembly Moderator, Presbyterian Church in Korea (Baekseok)' },
    { ko: '대한성서공회 이사장', en: 'Former Chairman of the Board, Korean Bible Society' },
    { ko: '서울교시협의회 19대 회장', en: 'Former 19th President, Seoul Municipal Church Council' },
    { ko: '경찰청 교경중앙협의회 40대 대표회장', en: 'Former 40th President, National Police Chaplaincy Council' },
  ];

  const books = [
    { ko: '루터의 기독교이념연구', en: "A Study of Luther's Christian Ideology" },
    { ko: '평신도 성서대학 교재', en: 'Lay Bible Institute Curriculum' },
    { ko: '평신도교육의 이론과 실제', en: 'Theory and Practice of Lay Education' },
    { ko: '계시록 요약강해', en: 'Expository Summary of the Book of Revelation' },
    { ko: '꿈이 있는 백성은 흥한다', en: 'People with Vision Flourish' },
    { ko: '내일을 위한 오늘의 준비', en: "Today's Preparation for Tomorrow" },
    { ko: '북한교회 어제와 오늘', en: 'North Korean Church: Yesterday and Today' },
    { ko: '중국 인권과 종교', en: 'Human Rights and Religion in China' },
    { ko: '다음세대의 비전을 보라', en: 'Behold the Vision of the Next Generation' },
    { ko: '천국 노마드의 삶', en: 'Life of a Heavenly Nomad' },
    { ko: '칼을 도로 칼집에 꽂으라', en: 'Put Your Sword Back into Its Sheath' },
    { ko: '하프타임', en: 'Halftime' },
    { ko: '비상하는 민족 남은 과제', en: 'Remaining Tasks for a Soaring Nation' },
    { ko: '시대를 직시하는 눈', en: 'Eyes Facing the Era' },
    { ko: '북한 기독교 어제와 오늘 그리고 내일', en: 'North Korean Christianity: Yesterday, Today, and Tomorrow' },
  ];

  const broadcasts = [
    { channel: 'CBS FM 98.1', title: t('진리의 말씀', 'Words of Truth'), time: t('매주일 오전 7시 30분', 'Sundays 7:30 AM') },
    { channel: 'CTS TV', title: t('생명의 말씀', 'Words of Life'), time: t('매주 토요일 밤 9시', 'Saturdays 9:00 PM') },
    { channel: 'C-Channel', title: t('방송설교', 'Sermon Broadcast'), time: t('매주 금 낮 12:50 / 토 밤 9:30', 'Fri 12:50 PM / Sat 9:30 PM') },
    { channel: 'Good TV', title: t('방송설교', 'Sermon Broadcast'), time: t('매주 주일 밤 9시 / 금 오전 4:30', 'Sun 9:00 PM / Fri 4:30 AM') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {t('담임목사 프로필', 'Senior Pastor Profile')}
          </h1>
          <p className="text-xl text-slate-700 font-bold">
            {t('영안장로교회 당회장 양병희 목사', 'Rev. Byeong-hee Yang, Senior Pastor of Youngan Presbyterian Church')}
          </p>
        </div>

        {/* 상단 프로필 히어로 카드 */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[360px] shrink-0">
            <PastorImageSwitcher />
          </div>
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-200">
              {t('당회장 목회 철학', 'Pastoral Philosophy')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('"주님께 칭찬받는 빌라델비아교회처럼, 균형목회를 지향합니다."',
                 '"Like the Church of Philadelphia praised by the Lord, we pursue balanced ministry."')}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              {t(
                '기도와 말씀을 통한 영성목회, 건강한 영혼과 치유를 위한 치유목회, 평신도 지도자를 세우는 교육목회, 복음통일과 다음세대를 준비하는 비전목회를 통해 하나님의 나라를 세워갑니다.',
                'We build the Kingdom of God through Spiritual Ministry rooted in prayer and Word, Healing Ministry for soul restoration, Educational Ministry raising lay leaders, and Vision Ministry preparing for Gospel unification and future generations.'
              )}
            </p>
            <div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                🏛️ {t('백석대학교 행정학 박사(Ph.D)', 'Ph.D., Baekseok University')}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                ✝️ {t('前 한국교회연합 대표회장', 'Former President, Communion of Churches in Korea')}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                📖 {t('대한성서공회 前 이사장', 'Former Board Chairman, Korean Bible Society')}
              </span>
            </div>
          </div>
        </div>

        {/* 3단 그리드: 학력, 경력, 저서 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 학력 소개 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#1a365d] rounded-full"></span>
              {t('학력 소개', 'Education')}
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed break-keep font-medium">
              {education.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{t(item.ko, item.en)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 경력 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0f172a] rounded-full"></span>
              {t('주요 경력', 'Ministry & Career')}
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed break-keep font-medium">
              {career.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{t(item.ko, item.en)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 저서 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#334155] rounded-full"></span>
              {t('주요 저서', 'Publications')}
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed break-keep font-medium">
              {books.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{t(item.ko, item.en)}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 방송 설교 안내 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
            {t('방송 설교 안내', 'Broadcast Ministry')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {broadcasts.map((b, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <span className="text-xs font-bold text-slate-700 block mb-1">{b.channel}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
