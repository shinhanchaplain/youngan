export interface SchoolDepartment {
  id: string; // 'infant', 'kinder1', 'kinder2', 'child1', 'child2', 'elem1', 'elem2', 'middle', 'high'
  num: number;
  name: string;
  age: string;
  time: string;
  location: string;
  pastor: string;
  pastorPhoto: string;
  manager: string;
  managerPhoto: string;
  motto: string;
  targetVision: string;
  programs: string[];
}

export const schoolDepartments: SchoolDepartment[] = [
  {
    id: 'infant',
    num: 1,
    name: '유아부',
    age: '0~3세 영유아 및 부모',
    time: '매주일 오전 11:30',
    location: '교육관 1층 유아부실',
    pastor: '민경희 전도사',
    pastorPhoto: '/images/school/min_kh.jpg',
    manager: '김혜경 권사',
    managerPhoto: '/images/school/kim_hk.jpg',
    motto: '하나님의 사랑 안에서 자라나는 믿음의 아기',
    targetVision: '가장 어린 시절부터 부모와 함께 예배의 기쁨을 배우고 오감 찬양과 축복 기도를 통해 믿음의 정서적 안정을 형성합니다.',
    programs: ['오감 성경 놀이 예배', '부모와 함께하는 축복 기도 시간', '영유아 성경암송', '아기학교 및 부모 교육']
  },
  {
    id: 'kinder1',
    num: 2,
    name: '유치 1부',
    age: '4~7세 미취학 아동',
    time: '매주일 오전 9:30',
    location: '교육관 2층 유치1부실',
    pastor: '민경희 전도사',
    pastorPhoto: '/images/school/min_kh.jpg',
    manager: '이경옥 권사',
    managerPhoto: '/images/school/lee_ko.jpg',
    motto: '예수님의 지혜와 키가 자라가는 어린이',
    targetVision: '율동과 찬양, 인형극과 시각 자료를 활용한 성경 이야기를 통해 예수님이 누구신지 배우고 예배하는 습관을 형성합니다.',
    programs: ['말씀 쏙쏙 율동 찬양', '시각 자료 구속사 공과 학습', '주일 생일 축하 및 사랑 나눔', '여름 성경학교']
  },
  {
    id: 'kinder2',
    num: 3,
    name: '유치 2부',
    age: '4~7세 미취학 아동',
    time: '매주일 오전 11:30',
    location: '교육관 2층 유치2부실',
    pastor: '황예진 전도사',
    pastorPhoto: '/images/school/hwang_yj.jpg',
    manager: '이문숙 권사',
    managerPhoto: '/images/school/lee_ms.jpg',
    motto: '말씀으로 쑥쑥 자라는 작은 예수',
    targetVision: '찬양과 기도로 하나님을 기쁘시게 하며 일상 속에서 순종과 감사의 성품을 훈련하는 다음세대를 세웁니다.',
    programs: ['신나는 찬양 축제', '단계별 유치 성경 교재 훈련', '달란트 시장 및 성탄 축하 발표', '교사-어린이 일대일 기도 결연']
  },
  {
    id: 'child1',
    num: 4,
    name: '유년 1부',
    age: '초등학교 1~3학년',
    time: '매주일 오전 9:30',
    location: '교육관 3층 유년1부실',
    pastor: '양은경 전도사',
    pastorPhoto: '/images/school/yang_ek.jpg',
    manager: '신예희 권사',
    managerPhoto: '/images/school/shin_yh.jpg',
    motto: '말씀을 가까이하는 지혜로운 하나님의 자녀',
    targetVision: '스스로 성경을 읽고 묵상하는 훈련을 시작하며 학교생활과 가정에서 정직하고 사랑을 실천하는 믿음의 어린이가 되도록 양육합니다.',
    programs: ['어린이 큐티 훈련', '성경 골든벨 대회', '반별 성경 공부 및 친교 활동', '여름 파워 캠프']
  },
  {
    id: 'child2',
    num: 5,
    name: '유년 2부',
    age: '초등학교 1~3학년',
    time: '매주일 오전 11:30',
    location: '교육관 3층 유년2부실',
    pastor: '양은경 전도사',
    pastorPhoto: '/images/school/yang_ek.jpg',
    manager: '신홍관 안수집사',
    managerPhoto: '/images/school/shin_hg.jpg',
    motto: '예배가 즐겁고 기도가 행복한 어린이',
    targetVision: '뜨거운 찬양과 말씀 선포를 통해 살아계신 하나님을 인격적으로 경험하고 복음의 열정을 품는 어린이로 자라납니다.',
    programs: ['살아있는 어린이 경배와 찬양', '친구 초청 전도 축제', '매주 성경 암송 챌린지', '겨울 성경 캠프']
  },
  {
    id: 'elem1',
    num: 6,
    name: '초등 1부',
    age: '초등학교 4~6학년',
    time: '매주일 오전 9:30',
    location: '교육관 4층 초등1부실',
    pastor: '변인우 부목사',
    pastorPhoto: '/images/pastors/byun_iw.jpg',
    manager: '김옥현 안수집사',
    managerPhoto: '/images/school/kim_oh.jpg',
    motto: '세상의 빛과 소금이 되는 어린이 리더',
    targetVision: '사춘기에 접어드는 초등 고학년 시기에 기독교적 세계관을 심어주고 세상의 문화 속에서 믿음으로 승리하는 리더십을 키웁니다.',
    programs: ['어린이 제자훈련 기초반', '찬양팀 및 방송 섬김이 훈련', '성경 지리 및 역사 탐방', '여름 비전 캠프']
  },
  {
    id: 'elem2',
    num: 7,
    name: '초등 2부',
    age: '초등학교 4~6학년',
    time: '매주일 오전 11:30',
    location: '교육관 4층 초등2부실',
    pastor: '정준회 부목사',
    pastorPhoto: '/images/pastors/jung_jh.jpg',
    manager: '이정미 권사',
    managerPhoto: '/images/school/lee_jm.jpg',
    motto: '오직 예수 그리스도를 자랑하는 초등부',
    targetVision: '구원의 감격과 복음의 능력을 확신하고 중학교 진학을 앞두고 견고한 믿음의 반석 위에 서도록 집중 양육합니다.',
    programs: ['일대일 신앙 멘토링', '선교지 탐방 및 비전 트립 준비', '어린이 성경통독 챌린지', '선배와의 만남 및 졸업 축복식']
  },
  {
    id: 'middle',
    num: 8,
    name: '중등부',
    age: '중학교 1~3학년 (청소년)',
    time: '매주일 오전 11:00',
    location: '비전센터 중등부실',
    pastor: '김종성 부목사',
    pastorPhoto: '/images/pastors/kim_js.jpg',
    manager: '정성진 장로',
    managerPhoto: '/images/school/jung_sj.jpg',
    motto: '꿈을 품고 세상을 변화시키는 믿음의 청소년',
    targetVision: '질풍노도의 청소년기에 정체성과 가치관을 성경으로 바로잡고 주도적인 찬양과 기도로 신앙의 불씨를 지핍니다.',
    programs: ['토요 찬양 기도 모임', '소그룹 성경공부 (GBS)', '청소년 여름/겨울 연합수련회', '친구 전도 프렌즈 데이']
  },
  {
    id: 'high',
    num: 9,
    name: '고등부',
    age: '고등학교 1~3학년 (청소년)',
    time: '매주일 오전 9:00',
    location: '비전센터 고등부실',
    pastor: '이성문 부목사',
    pastorPhoto: '/images/pastors/lee_sm.jpg',
    manager: '조정익 안수집사',
    managerPhoto: '/images/school/cho_ji.jpg',
    motto: '시대를 이끌어갈 그리스도의 담대한 청년 리더',
    targetVision: '학업과 입시의 치열한 현장 속에서 믿음의 담대함을 배우고 하나님이 주신 은사와 비전을 찾아 세상으로 도약하도록 돕습니다.',
    programs: ['고3 수험생을 위한 축복 기도회', '청소년 리더십 세미나', '국내 농어촌 단기 봉사 사역', '선배 멘토링 & 진로 코칭']
  }
];
