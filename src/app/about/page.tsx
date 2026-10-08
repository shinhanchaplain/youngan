import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      {/* 히어로 섹션 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">교회 비전</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          경건습관을 훈련하는 영안공동체 (딤전 4:7-8)
        </p>
      </section>

      {/* 비전 소개 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            영안장로교회는 성령으로 충만하여 훈련된 평신도와 중직자들을 중심으로
            위대한 계명을 실천하고 세상을 변화시키는 교회로 발돋움하기 위하여
            <strong className="text-blue-600 block mt-2 text-2xl">"경건습관을 훈련하는 영안공동체"</strong>
            라는 목표를 정하고 힘차게 전진하고 있습니다.
          </p>
        </div>
      </section>

      {/* 1. 영안교회의 비전과 사명 테이블 (4대 균형 목회 위로 배치) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          영안교회의 비전과 사명
        </h2>
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">영안교회는?</th>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">비전 (Vision)</th>
                <th className="px-6 py-5 text-left text-lg font-bold text-gray-900 w-1/3">3대 전략</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-6 text-lg font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 그리스도의 몸<br/>
                  2. 복음의 일꾼<br/>
                  3. 교회의 일꾼<br/>
                  4. 하나님의 사람으로 세움
                </td>
                <td className="px-6 py-6 text-lg font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 성령충만<br/>
                  2. 확실한 신앙고백<br/>
                  3. 고지 선점 (인물 양성)<br/>
                  4. 복음통일시대 준비
                </td>
                <td className="px-6 py-6 text-lg font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 나이테 전략 (신앙 중심으로 흡수)<br/>
                  2. 평생 교육 (교회 일꾼으로 성장)<br/>
                  3. 평신도 사역 (은사 발견 및 파견)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 4대 균형 목회 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          4대 균형 목회
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 영성목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">영성목회</h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>• 하나님과의 교제 회복 (예배 회복)</li>
              <li>• 기도 회복 (기도운동 활성화)</li>
            </ul>
          </div>

          {/* 치유목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">치유목회</h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>• 영육간의 전인적 치유</li>
              <li>• 가정 관심/사랑/행복 프로그램</li>
              <li>• 사회적 치유 및 이웃 돌보기</li>
            </ul>
          </div>

          {/* 교육목회 요약 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">교육목회</h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>• 1단계: 복음전파 (전도)</li>
              <li>• 2단계: 구원의 확신 (양육)</li>
              <li>• 3단계: 신앙성숙 (성숙)</li>
              <li>• 4단계: 리더십 양성 (지도자)</li>
            </ul>
          </div>

          {/* 비전목회 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">비전목회</h3>
            <ul className="space-y-3 text-gray-700 text-base font-medium tracking-tight break-keep">
              <li>• 국내 선교 지원</li>
              <li>• 국외 선교 파송 및 후원</li>
              <li>• 복음통일시대 준비</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 교육목회 상세 (4대 균형 목회 아래에 배치) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b pb-4 max-w-max mx-auto">
          교육목회 단계별 훈련
        </h2>
        
        {/* 4단계 교육목회 테이블 */}
        <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200 mb-12">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  전도<br/>
                  <span className="text-sm font-semibold text-blue-600">1단계: 복음전파</span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  양육<br/>
                  <span className="text-sm font-semibold text-blue-600">2단계: 구원의 확신</span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  성숙<br/>
                  <span className="text-sm font-semibold text-blue-600">3단계: 신앙성숙</span>
                </th>
                <th className="px-6 py-5 text-center text-lg font-bold text-gray-900 w-1/4">
                  지도자(재생산)<br/>
                  <span className="text-sm font-semibold text-blue-600">4단계: 리더쉽 양성</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 태신자 작정 및 전도교육<br/>
                  2. 전도특공대 및 기도특공대<br/>
                  3. 새가족반 기초과정 (세례필수과정)
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 새생명반<br/>
                  2. 정착반
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 확신과 성숙반<br/>
                  2. 제직학교반<br/>
                  3. 성경통독반<br/>
                  4. 성경일독반<br/>
                  5. Q.T반
                </td>
                <td className="px-6 py-6 text-base font-semibold text-gray-800 align-top leading-loose tracking-tight break-keep">
                  1. 목자세미나<br/>
                  2. 헌신자 훈련<br/>
                  3. 중직자 세미나<br/>
                  4. 제직 세미나<br/>
                  5. 필요한 재교육
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 목회자를 돕는 평생프로그램 (깔끔한 텍스트 카드) */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b text-center md:text-left">
            목회자를 돕는 평생프로그램
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">1단계</span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">구원상담</h4>
              <p className="text-sm text-gray-600">새가족 등록 후 목회자 접견</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">2단계</span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">새가족반</h4>
              <p className="text-sm text-gray-600">기초1 과정 및 정착 훈련</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">3단계</span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">훈련반</h4>
              <p className="text-sm text-gray-600">확신반 및 제직학교반</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-blue-600 block mb-1">4단계</span>
              <h4 className="text-lg font-bold text-gray-900 mb-1">지도자반</h4>
              <p className="text-sm text-gray-600">봉사 및 리더십 지도자 훈련</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
