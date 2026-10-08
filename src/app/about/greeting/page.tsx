import React from 'react';

export default function GreetingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">목사님 인사말</h1>
          <p className="text-xl text-blue-600 font-semibold">
            "사랑하고 축복합니다."
          </p>
        </div>

        {/* 인사말 본문 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* 목사님 사진 영역 (확대 및 정갈한 카드) */}
            <div className="w-full md:w-[360px] flex flex-col items-center shrink-0">
              <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-100">
                <img 
                  src="/images/pastor_clean.jpg" 
                  alt="양병희 담임목사"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="text-center mt-5 w-full">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">양병희 담임목사</h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">영안장로교회 당회장</p>
                
                {/* 기존 사진 안 텍스트를 정갈한 메시지 박스로 이동 */}
                <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-left text-sm text-gray-700 leading-relaxed font-medium">
                  <p className="font-bold text-blue-900 mb-1">샬롬!</p>
                  <p>저는 영안교회를 담임하는 양병희 목사입니다. 여러분의 영안교회 방문을 주님의 이름으로 환영합니다.</p>
                </div>
              </div>
            </div>

            {/* 본문 내용 */}
            <div className="flex-1 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg break-keep">
              <p>
                46년 전 하나님의 부름을 받고 12명이 27평 지하에서 영안교회를 개척하여 지금까지 이르고 있습니다. 모든 것이 다 하나님의 은혜입니다.
              </p>
              <p>
                현재 영안교회는 제직 4,518명 등 14,085명의 영안가족이 기쁨으로 하나 되어 섬기고 있습니다.
              </p>
              <p>
                저는 주님께 칭찬받았던 빌라델비아교회를 모델로 삼아 <strong>'균형목회'</strong>란 목회철학과 비전을 향해 모든 성도와 함께 푯대를 향해 믿음으로 달려가고 있습니다.
              </p>
              <p className="bg-blue-50 p-5 rounded-xl border border-blue-100 text-blue-900 font-medium">
                기도와 말씀을 통한 <strong>'영성목회'</strong>, 건강한 영혼과 가정과 사회를 만드는 <strong>'치유목회'</strong>, 교육과 훈련을 통해 평신도 지도자를 배출하는 <strong>'교육목회'</strong>, 복음통일시대를 준비하고 다음세대를 키우는 <strong>'비전목회'</strong>입니다. 이 비전을 이루기 위해 멈출 수 없는 사명을 감당하고 있습니다.
              </p>
              <p>
                영안교회는 하나님을 높이는 성경중심의 교회요, 복음중심의 교회요, 선교중심의 교회요, 또 세상의 어려움에 동참하여 세상을 변화시키기를 원하는 교회입니다. 이제 영안교회는 교회설립 46주년을 디딤돌 삼아 하나님 나라를 향해 50년, 100년의 희망찬 미래를 꿈꾸고 있습니다.
              </p>
              <p>
                우리교회는 기도하실 수 있도록 <strong>24시간 대성전을 개방</strong>하고 있습니다. 감격과 은혜의 예배에 겸손한 마음으로 당신을 초대합니다. 감사합니다.
              </p>

              <div className="pt-8 border-t border-gray-100 flex flex-col items-end">
                <p className="text-gray-500 text-sm mb-2">영안장로교회 담임목사</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">양 병 희</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
