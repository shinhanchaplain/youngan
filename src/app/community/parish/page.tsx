import React from 'react';
import { Users, Home } from 'lucide-react';

export default function ParishPage() {
  const parishes = [
    { name: '1교구', pastor: '변인우 부목사', leader: '조윤경 교구장', members: '1,602명' },
    { name: '2교구', pastor: '변인우 부목사', leader: '조윤경 교구장', members: '2,437명' },
    { name: '3교구', pastor: '이성문 부목사', leader: '정유미 교구장', members: '1,493명' },
    { name: '4교구', pastor: '이성문 부목사', leader: '정유미 교구장', members: '1,340명' },
    { name: '5교구', pastor: '김종성 부목사', leader: '김은혜 교구장', members: '2,336명' },
    { name: '6교구', pastor: '김종성 부목사', leader: '김은혜 교구장', members: '1,449명' },
    { name: '7교구', pastor: '김갑중 부목사', leader: '백선희 교구장', members: '1,562명' },
    { name: '8교구', pastor: '김갑중 부목사', leader: '백선희 교구장', members: '1,717명' },
    { name: '9교구', pastor: '김종성 부목사', leader: '김진하 교구장', members: '1,423명' },
    { name: '10교구', pastor: '정준회 부목사', leader: '김진하 교구장', members: '1,877명' },
    { name: '청년공동체', pastor: '정준회 부목사', leader: '김창식 안수집사', members: '청년 1, 2부' },
    { name: '북한선교회', pastor: '한안석 부목사', leader: '임미순 교구장', members: '특수 선교' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">교구 및 목장 안내</h1>
          <p className="text-xl text-gray-500">
            말씀을 나누고 삶을 나누는 사랑의 영안 생명공동체
          </p>
        </div>

        {/* 목장 공동체 소개 배너 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">Life Community</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                생명과 회복이 있는 목장 모임
              </h2>
              <p className="text-gray-700 leading-relaxed text-base break-keep">
                영안교회는 지역별로 모이는 10개의 장년교구와 240개의 목장이 운영되고 있으며, 
                청년교구 또한 21개의 목장으로 활발히 모이고 있습니다. 
                목장은 10~12가정의 성도들이 모여 매주 금요일 말씀을 나누고 교제하며 기도하는 생명공동체입니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-gray-900 block">10개</span>
                <span className="text-xs text-gray-500 font-semibold">장년 지역 교구</span>
              </div>
              <div className="bg-green-50/60 p-5 rounded-xl border border-green-100 text-center">
                <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-gray-900 block">240개</span>
                <span className="text-xs text-gray-500 font-semibold">사랑의 목장 모임</span>
              </div>
            </div>
          </div>
        </div>

        {/* 교구별 조직도 그리드 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
            교구별 섬김이 현황
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
                  <p><strong className="text-gray-900 font-semibold">담당 목사:</strong> {item.pastor}</p>
                  <p><strong className="text-gray-900 font-semibold">교구장:</strong> {item.leader}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
