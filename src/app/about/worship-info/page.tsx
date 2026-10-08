import React from 'react';

export default function WorshipInfoPage() {
  const sundayServices = [
    { name: '주일 1부 예배', time: '오전 07:30', target: '장년 및 성도', place: '대성전' },
    { name: '주일 2부 예배', time: '오전 09:20', target: '장년 및 성도', place: '대성전' },
    { name: '주일 3부 예배', time: '오전 11:30', target: '장년 및 성도', place: '대성전' },
    { name: '주일 4부 (청년부)', time: '오후 02:00', target: '청년부', place: '대성전' },
    { name: '주일 영어예배', time: '오후 01:30', target: '외국인 및 영어권 성도', place: '복지관 2층' },
    { name: '주일 저녁 찬양예배', time: '오후 05:00', target: '찬양과 말씀의 축제', place: '대성전' },
  ];

  const weekdayServices = [
    { name: '수요 예배', time: '수요일 저녁 07:30', target: '말씀강해 예배', place: '대성전' },
    { name: '금요 철야기도회', time: '금요일 저녁 09:00', target: '찬양, 말씀, 기도', place: '대성전' },
    { name: '새벽 기도회 1부', time: '월~토 오전 05:30', target: '새벽기도 성도', place: '대성전' },
    { name: '새벽 기도회 2부', time: '월~토 오전 06:30', target: '새벽기도 성도', place: '2층 교육관' },
    { name: '월삭 새벽기도회', time: '매월 첫째주 토요일 오전 06:00', target: '전교인', place: '대성전' },
  ];

  const schoolServices = [
    { name: '유아/유치 1부', time: '주일 오전 09:30', target: '영유아~미취학', place: '2층 교육관' },
    { name: '유치 2부', time: '주일 오전 11:30', target: '영유아~미취학', place: '2층 교육관' },
    { name: '유년부 (1, 2부)', time: '주일 오전 09:30 / 11:30', target: '초등 저학년', place: '3층 교육관' },
    { name: '초등부 (1, 2부)', time: '주일 오전 09:30 / 11:30', target: '초등 고학년', place: '복지관 3층' },
    { name: '중등부', time: '주일 오전 11:00', target: '중학생', place: '비전센터' },
    { name: '고등부', time: '주일 오전 09:00', target: '고등학생', place: '비전센터' },
    { name: '청년 1, 2부', time: '주일 오후 02:00', target: '대학/청년', place: '대성전' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">예배 및 모임 안내</h1>
          <p className="text-xl text-gray-500">
            영안장로교회의 주일 및 주중 예배 시간표입니다.
          </p>
        </div>

        {/* 1. 주일예배 */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
            주일 예배
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">예배명</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">시간</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">대상 및 내용</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">장소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sundayServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-base font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-base font-medium text-blue-600">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 ml-2">
            ※ 아기와 함께 예배드릴 수 있는 자모실은 2층 및 5층에 마련되어 있습니다.
          </p>
        </div>

        {/* 2. 주중 예배 및 기도회 */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
            주중 예배 및 기도회
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">예배명</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">시간</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">대상 및 내용</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">장소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {weekdayServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-base font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-base font-medium text-blue-600">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 교회학교 예배 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
            교회학교 (주일학교) 예배
          </h2>
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">부서명</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/4">시간</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">대상</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">장소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schoolServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-base font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-base font-medium text-blue-600">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.target}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.place}</td>
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
