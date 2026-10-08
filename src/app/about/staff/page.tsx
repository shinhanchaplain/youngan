import React from 'react';

export default function StaffPage() {
  const pastors = [
    { name: '양병희', role: '담임목사 / 당회장', department: '총괄 목회', photo: '/images/pastor_clean.jpg' },
    { name: '김종성', role: '부목사 (선임)', department: '5, 6, 9교구 / 중등부', photo: '/images/pastors/kim_js.jpg' },
    { name: '이성문', role: '부목사', department: '3, 4교구 / 고등부 / 평신도', photo: '/images/pastors/lee_sm.jpg' },
    { name: '정준회', role: '부목사 (교육)', department: '10교구 / 청년부 / 초등2부', photo: '/images/pastors/jung_jh.jpg' },
    { name: '김갑중', role: '부목사', department: '7, 8교구 / 방송 / 비서실', photo: '/images/pastors/kim_gj.jpg' },
    { name: '변인우', role: '부목사 (행정)', department: '12교구 / 행정 / 초등1부', photo: '/images/pastors/byun_iw.jpg' },
    { name: '최동철', role: '부목사', department: '애경사 / 전도특공대', photo: '/images/pastors/choi_dc.jpg' },
    { name: '한재희', role: '부목사', department: '상담 사역', photo: '/images/pastors/han_jh.jpg' },
    { name: '이해선', role: '부목사', department: '목회 지원', photo: '/images/pastors/lee_hs.jpg' },
    { name: '이동현', role: '부목사', department: '미디어 / 특수사역', photo: '/images/pastors/lee_dh.jpg' },
    { name: '한안석', role: '부목사', department: '통일선교 / 복지재단', photo: '/images/pastors/han_as.jpg' },
    { name: '김정섭', role: '부목사', department: '해외선교 (인도네시아)', photo: '/images/pastors/kim_js2.jpg' },
  ];

  const leadingElders = [
    { name: '손형철', photo: '/images/elders/son_hc.jpg' },
    { name: '조경희', photo: '/images/elders/cho_kh.jpg' },
    { name: '장호식', photo: '/images/elders/jang_hs.jpg' },
    { name: '임용길', photo: '/images/elders/lim_yg.jpg' },
    { name: '고광준', photo: '/images/elders/ko_gj.jpg' },
    { name: '장신옥', photo: '/images/elders/jang_so.jpg' },
    { name: '김영석', photo: '/images/elders/kim_ys.jpg' },
    { name: '라병현', photo: '/images/elders/ra_bh.jpg' },
    { name: '조관섭', photo: '/images/elders/cho_ks.jpg' },
    { name: '임병근', photo: '/images/elders/lim_bg.jpg' },
    { name: '박춘수', photo: '/images/elders/park_cs.jpg' },
    { name: '조병봉', photo: '/images/elders/cho_bb.jpg' },
  ];

  const allElders = [
    '손형철', '조경희', '장호식', '임용길', '고광준', '장신옥',
    '김영석', '라병현', '조관섭', '임병근', '박춘수', '조병봉',
    '주동일', '강명식', '김광월', '김대수', '김기주', '유택열',
    '박종두', '박양수', '강성룡', '이건수', '서예석', '이범균',
    '조규탁', '정성진', '강달창', '김석원', '김승수', '김형곤',
    '박광규', '박권선', '박용균', '박장용', '백성국', '손형우',
    '송태호', '신동욱', '안주훈', '이동규', '이병건', '전세일',
    '정원환', '황경섭', '황준연', '이종민', '김형조', '노병성',
    '한병갑', '이은직', '유창식', '정영호', '김성섭', '박일권',
    '최창균', '김종구', '이수형', '류기남', '박무순', '송창용',
    '신영문', '정관춘', '정강진', '최인호', '고재완', '김석현'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">섬기는 분들</h1>
          <p className="text-xl text-gray-500">
            영안장로교회를 기쁨과 기도로 섬기는 교역자와 제직입니다.
          </p>
        </div>

        {/* 1. 담임목사 및 교역자 섹션 */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-blue-600 rounded-full inline-block"></span>
            교역자 (목회팀)
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastors.map((p, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl p-6 shadow-sm border transition-all flex items-center gap-5 ${
                  idx === 0 ? 'border-blue-300 ring-2 ring-blue-100 bg-blue-50/20 sm:col-span-2 lg:col-span-3' : 'border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-blue-100 bg-gray-50 shadow-inner">
                  <img 
                    src={p.photo} 
                    alt={p.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {p.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{p.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 장로회 섹션 (사진 대표단 + 전체 명단) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-green-600 rounded-full inline-block"></span>
              시무 및 원로/은퇴 장로회
            </h2>
            <span className="text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              총 {allElders.length}명
            </span>
          </div>
          
          {/* 장로 대표 사진 그리드 (배경 통일) */}
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">장로회 대표단</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {leadingElders.map((e, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100 hover:bg-gray-100/80 transition">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border border-gray-200 shadow-sm bg-white">
                    <img src={e.photo} alt={e.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">{e.name}</p>
                  <p className="text-xs text-gray-500">장로</p>
                </div>
              ))}
            </div>
          </div>

          {/* 전체 장로 명단 */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">전체 시무 및 은퇴 장로</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {allElders.map((name, idx) => (
                <div key={idx} className="p-2.5 text-center bg-gray-50/60 rounded-lg border border-gray-100 text-gray-700 font-medium text-sm">
                  {name} <span className="text-xs text-gray-400">장로</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
