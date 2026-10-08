'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WorshipInfoPage() {
  const { t } = useLanguage();

  const sundayServices = [
    { name: t('주일 1부 예배', 'Sunday 1st Service'), time: '07:30 AM', target: t('장년 및 성도', 'Adults & Congregation'), place: t('대성전', 'Main Sanctuary') },
    { name: t('주일 2부 예배', 'Sunday 2nd Service'), time: '09:20 AM', target: t('장년 및 성도', 'Adults & Congregation'), place: t('대성전', 'Main Sanctuary') },
    { name: t('주일 3부 예배', 'Sunday 3rd Service'), time: '11:30 AM', target: t('장년 및 성도', 'Adults & Congregation'), place: t('대성전', 'Main Sanctuary') },
    { name: t('주일 4부 (청년부)', 'Sunday 4th (Young Adults)'), time: '02:00 PM', target: t('청년부', 'Young Adults'), place: t('대성전', 'Main Sanctuary') },
    { name: t('주일 영어예배', 'English Worship Service'), time: '01:30 PM', target: t('외국인 및 영어권 성도', 'English-speaking Congregation'), place: t('복지관 2층', 'Welfare Bldg 2F') },
    { name: t('주일 저녁 찬양예배', 'Sunday Evening Praise'), time: '05:00 PM', target: t('찬양과 말씀의 축제', 'Praise & Word Festival'), place: t('대성전', 'Main Sanctuary') },
  ];

  const weekdayServices = [
    { name: t('수요 예배', 'Wednesday Service'), time: t('수요일 저녁 07:30', 'Wed 7:30 PM'), target: t('말씀강해 예배', 'Expository Preaching'), place: t('대성전', 'Main Sanctuary') },
    { name: t('금요 철야기도회', 'Friday All-Night Prayer'), time: t('금요일 저녁 09:00', 'Fri 9:00 PM'), target: t('찬양, 말씀, 기도', 'Praise, Word & Prayer'), place: t('대성전', 'Main Sanctuary') },
    { name: t('새벽 기도회 1부', 'Early Morning Prayer 1st'), time: t('월~토 오전 05:30', 'Mon~Sat 5:30 AM'), target: t('새벽기도 성도', 'Morning Devotion'), place: t('대성전', 'Main Sanctuary') },
    { name: t('새벽 기도회 2부', 'Early Morning Prayer 2nd'), time: t('월~토 오전 06:30', 'Mon~Sat 6:30 AM'), target: t('새벽기도 성도', 'Morning Devotion'), place: t('2층 교육관', 'Education Bldg 2F') },
    { name: t('월삭 새벽기도회', 'Monthly First-Day Prayer'), time: t('매월 첫째주 토요일 오전 06:00', '1st Saturday of Month 6:00 AM'), target: t('전교인', 'All Congregation'), place: t('대성전', 'Main Sanctuary') },
  ];

  const schoolServices = [
    { name: t('유아/유치 1부', 'Toddler / Kindergarten 1'), time: '09:30 AM', target: t('영유아~미취학', 'Infants & Preschoolers'), place: t('2층 교육관', 'Education Bldg 2F') },
    { name: t('유치 2부', 'Kindergarten 2'), time: '11:30 AM', target: t('미취학 아동', 'Preschoolers'), place: t('2층 교육관', 'Education Bldg 2F') },
    { name: t('유년부 (1, 2부)', 'Lower Elementary (1, 2)'), time: '09:30 AM / 11:30 AM', target: t('초등 저학년 (1~3학년)', 'Grades 1~3'), place: t('3층 교육관', 'Education Bldg 3F') },
    { name: t('초등부 (1, 2부)', 'Upper Elementary (1, 2)'), time: '09:30 AM / 11:30 AM', target: t('초등 고학년 (4~6학년)', 'Grades 4~6'), place: t('복지관 3층', 'Welfare Bldg 3F') },
    { name: t('중등부', 'Middle School'), time: '11:00 AM', target: t('중학생', 'Middle Schoolers'), place: t('비전센터', 'Vision Center') },
    { name: t('고등부', 'High School'), time: '09:00 AM', target: t('고등학생', 'High Schoolers'), place: t('비전센터', 'Vision Center') },
    { name: t('청년 1, 2부', 'Young Adults (1, 2)'), time: '02:00 PM', target: t('대학생 및 청년', 'College & Young Adults'), place: t('대성전', 'Main Sanctuary') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('예배 및 모임 안내', 'Worship Schedule & Service Hours')}
          </h1>
          <p className="text-xl text-gray-500">
            {t('영안장로교회의 주일 및 주중 예배 시간표입니다.', 'Weekly Sunday and Weekday Worship Schedule of Youngan Presbyterian Church.')}
          </p>
        </div>

        {/* 1. 주일예배 */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-slate-900 rounded-full inline-block"></span>
            {t('주일 예배', 'Sunday Services')}
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('예배명', 'Service')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('시간', 'Time')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">{t('대상 및 내용', 'Target / Details')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('장소', 'Location')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sundayServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 주중예배 및 기도회 */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-slate-900 rounded-full inline-block"></span>
            {t('주중 예배 및 기도회', 'Weekday Services & Prayer')}
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('예배명', 'Service')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('시간', 'Time')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">{t('대상 및 내용', 'Target / Details')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('장소', 'Location')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {weekdayServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 교회학교 예배 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-slate-900 rounded-full inline-block"></span>
            {t('교회학교 예배', 'Sunday School Services')}
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('부서명', 'Department')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">{t('시간', 'Time')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">{t('대상', 'Age / Group')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('장소', 'Location')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schoolServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
