export default function CommunityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 상단 헤더 배너 */}
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">공동체와 훈련</h1>
        <p className="text-lg text-blue-200">성도들의 따뜻한 교제와 영적 성장이 이루어지는 곳입니다.</p>
      </div>

      {/* 본문 영역 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-4">교구 안내</h3>
            <p className="text-gray-600 mb-6">지역별로 모이는 소그룹 공동체 안내입니다. 삶을 나누고 기도하는 믿음의 가족을 만나보세요.</p>
            <button className="text-blue-600 font-bold hover:underline">자세히 보기 &rarr;</button>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-4">교회 학교</h3>
            <p className="text-gray-600 mb-6">영유아부부터 청년부까지, 다음 세대를 믿음의 일꾼으로 길러내는 교육 부서입니다.</p>
            <button className="text-blue-600 font-bold hover:underline">자세히 보기 &rarr;</button>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-4">훈련 사역</h3>
            <p className="text-gray-600 mb-6">새가족 교육, 제자훈련, 사역자 훈련 등 영적 성숙을 돕는 다양한 양육 프로그램입니다.</p>
            <button className="text-blue-600 font-bold hover:underline">자세히 보기 &rarr;</button>
          </div>

        </div>
      </div>
    </div>
  );
}
