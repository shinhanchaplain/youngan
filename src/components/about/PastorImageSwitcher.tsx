'use client';

import React, { useState, useEffect } from 'react';

export default function PastorImageSwitcher() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // 3초 주기 자동 전환

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[340px] h-[460px] mx-auto flex items-end justify-center overflow-hidden">
      {/* 부드러운 스튜디오 조명 그라데이션 원형 배경 */}
      <div className="absolute inset-x-4 bottom-0 top-12 rounded-3xl bg-gradient-to-t from-blue-100/80 via-slate-50 to-white border border-blue-50/60 shadow-inner -z-10" />

      {/* 1번 사진: 새로 업로드해주신 와인색 정장 인물화 (화사한 파스텔톤 스튜디오 배경) */}
      <div 
        className={`absolute inset-0 flex items-end justify-center transition-opacity duration-1000 ease-in-out ${
          currentIdx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <img
          src="/images/pastor_profile_pastel.jpg"
          alt="양병희 담임목사 (포트레이트 1)"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* 2번 사진: 2019 영안 대표 포트레이트 */}
      <div 
        className={`absolute inset-0 flex items-end justify-center transition-opacity duration-1000 ease-in-out ${
          currentIdx === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full bg-gradient-to-t from-sky-100/90 via-slate-50 to-white flex items-end justify-center">
          <img
            src="/images/pastor_switch_1.png"
            alt="양병희 담임목사 (포트레이트 2)"
            className="w-auto h-[420px] object-contain drop-shadow-lg select-none"
          />
        </div>
      </div>

      {/* 하단 3초 전환 인디케이터 도트 */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-20">
        <span 
          className={`h-1.5 rounded-full transition-all duration-300 ${
            currentIdx === 0 ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300'
          }`} 
        />
        <span 
          className={`h-1.5 rounded-full transition-all duration-300 ${
            currentIdx === 1 ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300'
          }`} 
        />
      </div>
    </div>
  );
}
