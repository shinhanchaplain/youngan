import PastorImageSwitcher from '@/components/about/PastorImageSwitcher';

export default function PastorProfilePage() {
  const education = [
    '고려대학교 문학사',
    '고려대학교 정치학석사',
    '백석대학교 신학대학원(구 기독신학원) 졸업',
    '감리교 신학대학교 선교대학원 졸업',
    '美 캘리포니아신학대학원 목회학박사 (D.Min)',
    '백석대학교 행정학 박사 (Ph.D)',
    '백석대학교 명예신학박사',
    '美 고든콘웰 신학대학원 명예철학박사',
  ];

  const career = [
    '現 영안장로교회 당회장',
    '現 (사)동북아한민족협의회 대표회장',
    '現 영안복지재단 이사장',
    '現 기독교연합신문사 대표이사',
    '現 백석대학교 실천신학대학원장',
    '現 백석예술대학교 서울백석학원 이사장',
    '한국교회연합 4대 대표회장',
    '한국장로교총연합회 28대 대표회장',
    '대한예수교장로회(백석) 증경총회장',
    '대한성서공회 이사장',
    '서울교시협의회 19대 회장',
    '경찰청 교경중앙협의회 40대 대표회장',
  ];

  const books = [
    '루터의 기독교이념연구',
    '평신도 성서대학 교재',
    '평신도교육의 이론과 실제',
    '계시록 요약강해',
    '꿈이 있는 백성은 흥한다',
    '내일을 위한 오늘의 준비',
    '북한교회 어제와 오늘',
    '중국 인권과 종교',
    '다음세대의 비전을 보라',
    '천국 노마드의 삶',
    '칼을 도로 칼집에 꽂으라',
    '하프타임',
    '비상하는 민족 남은 과제',
    '시대를 직시하는 눈',
    '북한 기독교 어제와 오늘 그리고 내일',
  ];

  const broadcasts = [
    { channel: 'CBS 기독교방송 (FM 98.1)', title: '진리의 말씀', time: '매주일 오전 7시 30분' },
    { channel: 'CTS 기독교TV', title: '생명의 말씀', time: '매주 토요일 밤 9시' },
    { channel: 'C채널', title: '방송설교', time: '매주 금 낮 12:50 / 토 밤 9:30' },
    { channel: 'Good TV', title: '방송설교', time: '매주 주일 밤 9시 / 금 오전 4:30' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">담임목사 프로필</h1>
          <p className="text-xl text-slate-700 font-bold">
            영안장로교회 당회장 양병희 목사
          </p>
        </div>

        {/* 상단 프로필 히어로 카드 (배경 제거 2장 3초 자동 스위칭) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[360px] shrink-0">
            <PastorImageSwitcher />
          </div>
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-200">
              당회장 목회 철학
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              "주님께 칭찬받는 빌라델비아교회처럼, 균형목회를 지향합니다."
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              기도와 말씀을 통한 <strong>영성목회</strong>, 건강한 영혼과 치유를 위한 <strong>치유목회</strong>, 평신도 지도자를 세우는 <strong>교육목회</strong>, 복음통일과 다음세대를 준비하는 <strong>비전목회</strong>를 통해 하나님의 나라를 세워갑니다.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                🏛️ 백석대학교 행정학 박사(Ph.D)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                ✝️ 前 한국교회연합 대표회장
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                📖 대한성서공회 前 이사장
              </span>
            </div>
          </div>
        </div>

        {/* 3단 그리드: 학력, 경력, 저서 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 학력 소개 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#1a365d] rounded-full"></span>
              학력 소개
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-base leading-relaxed break-keep font-medium">
              {education.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 경력 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0f172a] rounded-full"></span>
              주요 경력
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-base leading-relaxed break-keep font-medium">
              {career.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 저서 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#334155] rounded-full"></span>
              주요 저서
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-base leading-relaxed break-keep font-medium">
              {books.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 방송 설교 안내 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
            방송 설교 안내
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {broadcasts.map((b, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <span className="text-xs font-bold text-slate-700 block mb-1">{b.channel}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
