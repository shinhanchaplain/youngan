export interface VisionCommittee {
  id: string; // 'worship', 'education', 'evangelism', 'event', 'admin', 'layman', 'steward', 'mission'
  name: string;
  role: string;
  leader: string;
  leaderPhoto?: string;
  subLeaders: string[];
  bannerImage: string;
  description: string;
  tasks: string[];
}

export const visionCommittees: VisionCommittee[] = [
  {
    id: 'worship',
    name: '예배비전위원회',
    role: '예배와 성례, 찬양 및 거룩한 성전 예배 사역 총괄',
    leader: '신동욱 장로',
    subLeaders: ['박장용 장로', '이동규B 장로'],
    bannerImage: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800&h=300',
    description: '하나님을 높이는 영성 깊은 예배와 성령의 임재가 가득한 주일 대예배 및 주중 집회를 기도로 준비하고 진행합니다.',
    tasks: ['주일 대예배 및 절기예배 기획', '찬양대 및 방송 음향 미디어 사역 지원', '성례식(세례·성찬) 집례 지원', '예배 안내 및 헌금위원 조직']
  },
  {
    id: 'education',
    name: '교육비전위원회',
    role: '다음세대 신앙 계승과 평신도 양육 교육 총괄',
    leader: '박양수 장로',
    subLeaders: ['박영희 권사', '정성진 장로'],
    bannerImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=300',
    description: '영아부에서 청년에 이르기까지 다음세대를 성경적 가치관으로 세우고 평신도 성서신학원 훈련을 전폭적으로 지원합니다.',
    tasks: ['교회학교 9개 부서 사역 지원', '여름·겨울 성경학교 및 수련회 지원', '교사 영성 세미나 및 헌신예배', '평신도 훈련원 양육 지원']
  },
  {
    id: 'evangelism',
    name: '전도비전위원회',
    role: '지역 사회 복음화와 영혼 구원 사역 총괄',
    leader: '주동일 장로',
    subLeaders: ['이승재 권사', '황준연 장로'],
    bannerImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=300',
    description: '잃어버린 한 영혼을 찾아 세상 속으로 나아가는 전도 사역을 기획하고 전도 특공대 및 지역 거점 전도를 이끕니다.',
    tasks: ['관계전도 및 총동원 전도주일 기획', '화요·목요 전도대 활동 지원', '병원 및 군부대, 교도소 특수전도 지원', '새가족 전도 정착 연계']
  },
  {
    id: 'event',
    name: '행사비전위원회',
    role: '교회 대내외 영적 집회와 특별 행사 기획 총괄',
    leader: '박춘수 장로',
    leaderPhoto: '/images/elders/park_cs.jpg',
    subLeaders: ['박용균 장로', '정성진 장로', '정강진 장로'],
    bannerImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800&h=300',
    description: '교회설립 기념행사, 부흥성회, 수련회, 바자회 등 영안가족 전체가 하나 되는 주요 대형 행사를 원활하게 총괄합니다.',
    tasks: ['교회설립 기념 감사예배 및 행사', '전교인 체육대회 및 한마음 축제', '부흥사경회 및 특별 심령부흥집회', '지역 주민 초청 문화 행사']
  },
  {
    id: 'admin',
    name: '관리비전위원회',
    role: '성전 시설 안전, 환경 관리 및 비품 유지 총괄',
    leader: '박종두 장로',
    subLeaders: ['이환용 안수집사', '조명순 권사'],
    bannerImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800&h=300',
    description: '성도들이 쾌적하고 안전한 환경에서 예배하고 교제할 수 있도록 대성전과 교육관의 모든 시설을 빈틈없이 관리합니다.',
    tasks: ['성전 안전 점검 및 시설 유지보수', '음향·조명·냉난방 공조 설비 점검', '성전 미화 및 조경 환경 관리', '교회 주차 안내 및 차량 관리']
  },
  {
    id: 'layman',
    name: '평신도비전위원회',
    role: '남·여선교회 및 평신도 사역자 협력 총괄',
    leader: '안주훈 장로',
    subLeaders: ['신은이 권사', '박성연 권사'],
    bannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800&h=300',
    description: '평신도 지체들이 은사에 따라 자발적으로 교회를 섬기며 세상 속에서 빛과 소금의 사명을 감당하도록 돕습니다.',
    tasks: ['남·여선교회 연합 사역 조율', '구역 및 평신도 봉사대 활동', '지역 소외계층 구제 및 반찬 나눔 사역', '평신도 리더십 영성 훈련']
  },
  {
    id: 'steward',
    name: '청지기비전위원회',
    role: '교회 재정의 투명성과 청지기적 사명 총괄',
    leader: '고광준 장로',
    leaderPhoto: '/images/elders/ko_gj.jpg',
    subLeaders: ['권기정 안수집사'],
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800&h=300',
    description: '하나님의 은혜로 드려진 성도들의 헌금을 성경적 청지기 원리에 따라 공정하고 투명하며 충성되게 집행합니다.',
    tasks: ['교회 예산 수립 및 결산 감사', '투명한 헌금 관리 및 재정 운용', '연말정산 기부금영수증 관리', '사회복지 및 구제 재정 집행']
  },
  {
    id: 'mission',
    name: '선교비전위원회',
    role: '국내외 선교사 파송 및 농어촌 미자립교회 후원 총괄',
    leader: '유택열 장로',
    subLeaders: ['백성국 장로', '김중배 안수집사', '박장용 장로'],
    bannerImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800&h=300',
    description: '열방을 향한 주님의 지상명령을 받들어 해외 선교사를 파송하고 50억 50교회 마중물 프로젝트 등 농어촌 미자립교회를 섬깁니다.',
    tasks: ['해외 선교사 파송 및 사역지 지원', '미자립교회 및 농어촌 교회 돕기', '단기선교 훈련 및 파송', '북한 구원 및 복음통일 선교 준비']
  }
];
