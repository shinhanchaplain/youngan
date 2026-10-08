import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

export default function TrainingPage() {
  const courses = [
    {
      step: '1단계',
      title: '새가족모임',
      desc: '교회에 처음 등록한 성도들을 환영하고 교회의 비전과 기본 신앙을 나누는 첫걸음 모임',
      manager: '이성문 부목사'
    },
    {
      step: '2단계',
      title: '새생명반',
      desc: '구원의 확신과 복음의 기초를 단단히 다지는 필수 양육 과정',
      manager: '최동철 부목사'
    },
    {
      step: '3단계',
      title: '정착반',
      desc: '영안공동체의 일원으로서 목장과 예배에 안정적으로 정착하도록 돕는 과정',
      manager: '최동철 부목사'
    },
    {
      step: '4단계',
      title: '확신과 성숙반',
      desc: '그리스도인으로서의 정체성과 성숙한 삶의 열매를 맺기 위한 심화 훈련 과정',
      manager: '최동철 부목사, 김종성 부목사'
    },
    {
      step: '5단계',
      title: '제직학교반',
      desc: '주님의 몸 된 교회를 섬길 충성된 일꾼과 제직을 양성하는 사명자 훈련',
      manager: '최동철 부목사, 김종성 부목사'
    },
    {
      step: '특별과정',
      title: '성경통독 및 제자반',
      desc: '성경 66권을 통독하고 하나님의 말씀으로 온전한 삶을 살아내는 평생 성경공부',
      manager: '최동철 부목사'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">훈련 및 양육 사역</h1>
          <p className="text-xl text-gray-500">
            그리스도의 장성한 분량에 이르기까지 훈련하는 평신도 양육 체계입니다.
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
                평신도를 동역자로 세우는 체계적인 교육과정
              </h2>
              <p className="text-gray-700 leading-relaxed text-base break-keep">
                영안교회는 성도 한 사람 한 사람이 구원의 확신을 얻고 신앙의 성숙을 이루어 하나님의 나라를 위해 헌신하는 충성된 지도자로 세워지도록 단계별 평생 훈련 과정을 운영하고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 단계별 커리큘럼 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
            단계별 교육 훈련 커리큘럼
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
                  <span className="font-semibold text-gray-700">담당: {item.manager}</span>
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 상시 모집
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
