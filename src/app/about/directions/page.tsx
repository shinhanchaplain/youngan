import React from 'react';
import { MapPin, Phone, Printer, Navigation, Bus, Train } from 'lucide-react';

export default function DirectionsPage() {
  const address = "서울특별시 중랑구 신내로15길 179";
  
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">찾아오시는 길</h1>
          <p className="text-xl text-gray-500">
            영안장로교회로 오시는 길을 상세히 안내해 드립니다.
          </p>
        </div>

        {/* 주소 및 연락처 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">교회 주소</h3>
                <p className="text-lg font-bold text-gray-900">{address}</p>
                <p className="text-sm text-gray-500 mt-1">(구 주소: 서울특별시 중랑구 신내동 662)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">대표 전화 / 팩스</h3>
                <p className="text-lg font-bold text-gray-900">Tel: 02-3423-0451</p>
                <p className="text-sm text-gray-500 mt-1">Fax: 02-3423-0458</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href={`https://map.kakao.com/link/search/${encodeURIComponent(address)}`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors text-sm"
            >
              <Navigation className="w-4 h-4" /> 카카오맵으로 보기
            </a>
            <a 
              href={`https://map.naver.com/v5/search/${encodeURIComponent(address)}`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#03C75A] hover:bg-[#02b350] text-white font-bold rounded-lg transition-colors text-sm"
            >
              <Navigation className="w-4 h-4" /> 네이버지도로 보기
            </a>
          </div>
        </div>

        {/* 약도 이미지 카드 (업스케일 및 확대) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-10 text-center">
          <div className="flex items-center justify-between mb-6 border-b pb-3 text-left">
            <h2 className="text-xl font-bold text-gray-900">약도 안내</h2>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              클릭 시 고해상도 확대
            </span>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 inline-block w-full">
            <img 
              src="/images/map_hd.jpg" 
              alt="영안장로교회 고해상도 약도"
              className="w-full h-auto object-contain max-h-[850px] mx-auto"
            />
          </div>
        </div>

        {/* 대중교통 안내 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">대중교통 안내</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">지하철 이용 시</h3>
                <p className="text-gray-700 leading-relaxed break-keep">
                  <strong>6호선 봉화산역</strong> 하차 후 도보 또는 마을버스 이용
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">버스 이용 시</h3>
                <p className="text-gray-700 leading-relaxed break-keep">
                  신내동 영안교회 인근 정류장 하차 (간선/지선/마을버스 노선 운행)
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
