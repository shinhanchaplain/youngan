'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Calendar, BookOpen, HeartHandshake, ChevronRight, UserPlus, FileText, Gift, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Video {
  id: string;
  title: string;
  video_id: string; // DB 컬럼명에 맞춤
  category: string;
  date: string;
}

export default function Home() {
  const [latestVideos, setLatestVideos] = useState<Video[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetchLatestVideos();
  }, []);

  const fetchLatestVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
        
      if (data) {
        setLatestVideos(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // 배너 데이터: 1번(50억 50교회 마중물), 2번(새성전), 3번(환영과 푸른하늘)
  const banners = [
    { 
      id: 1, 
      imageUrl: '/banner_project50.jpg?v=centered60', 
      link: '/news/286',
      title: '50억 50교회 회복 마중물 프로젝트'
    },
    { 
      id: 2, 
      imageUrl: '/banner1.jpg?v=new_church', 
      link: '/about',
      title: '영안장로교회 새 성전 비전' 
    },
    { 
      id: 3, 
      imageUrl: '/banner2.jpg?v=sky2', 
      link: '/about/greeting',
      title: '환영합니다' 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner Section (만나교회 스타일의 부드러운 Crossfade 배너) */}
      <section className="w-full relative h-[420px] md:h-[520px] lg:h-[620px] bg-slate-950 overflow-hidden">
        {isMounted && (
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            className="w-full h-full"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id} className="relative">
                <Link 
                  href={banner.link} 
                  className="block w-full h-full bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${banner.imageUrl})` }}
                >
                  {/* 배너 위에 글씨: 3번 배너에 환영합니다 텍스트 및 양쪽 VISION, 2026 표어 (40% 확대) 출력 */}
                  {banner.id === 3 && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-between px-4 sm:px-8 lg:px-14">
                      
                      {/* 왼쪽: VISION (하나님사랑, 교회사랑, 이웃사랑) - 40% 대형화 */}
                      <div className="hidden md:flex flex-col items-center bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/50 w-[180px] shrink-0 animate-fade-in">
                        <span className="text-sm font-black tracking-widest text-slate-500 uppercase mb-3">
                          VISION
                        </span>
                        <div className="flex flex-col items-center text-center font-black leading-tight space-y-3 py-3 w-full">
                          <span className="text-xl lg:text-2xl text-sky-600 tracking-tight">하나님<br/>사랑</span>
                          <span className="text-xl lg:text-2xl text-teal-600 tracking-tight">교회<br/>사랑</span>
                          <span className="text-xl lg:text-2xl text-emerald-600 tracking-tight">이웃<br/>사랑</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-200 text-center w-full">
                          <span className="text-xs text-slate-500 font-bold block">영안교회는</span>
                          <span className="text-sm text-rose-500 font-black block mt-0.5">희망입니다</span>
                        </div>
                      </div>

                      {/* 중앙: 환영합니다 메시지 */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-2xl lg:max-w-3xl mx-auto">
                        <span className="text-blue-200 text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase mb-2 drop-shadow">
                          Welcome to Youngan Presbyterian Church
                        </span>
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-2xl tracking-tight leading-tight">
                          영안장로교회에 오신 것을 환영합니다
                        </h2>
                        <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg max-w-2xl font-light drop-shadow">
                          오직 예수 그리스도의 복음과 사랑으로 세상을 품는 믿음의 공동체
                        </p>
                      </div>

                      {/* 오른쪽: 2026 표어 (경건습관을 훈련하는 영안공동체) - 40% 대형화 */}
                      <div className="hidden md:flex flex-col items-center bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/50 w-[180px] shrink-0 animate-fade-in">
                        <span className="text-sm font-black tracking-widest text-slate-500 uppercase mb-3">
                          2026 표어
                        </span>
                        <div className="flex flex-col items-center text-center font-black leading-tight space-y-3 py-3 w-full">
                          <span className="text-xl lg:text-2xl text-rose-600 tracking-tight">경건<br/>습관을</span>
                          <span className="text-xl lg:text-2xl text-slate-800 tracking-tight">훈련<br/>하는</span>
                          <span className="text-xl lg:text-2xl text-rose-600 tracking-tight">영안<br/>공동체</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-200 text-center w-full">
                          <span className="text-xs text-slate-700 font-bold block">딤전 4:7-8</span>
                        </div>
                      </div>

                    </div>
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      {/* 3대 핵심 카테고리 (높은뜻정의교회/온누리 스타일의 고급 사선/그라데이션 카드 & 딥 블루/어스 톤) */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 카드 1: 예배 안내 */}
            <div className="relative rounded-2xl p-7 text-white overflow-hidden shadow-sm hover:shadow-md transition bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="w-10 h-0.5 bg-blue-300/60 mb-3" />
                <h3 className="text-2xl font-black tracking-tight mb-5 text-white">예배 안내</h3>
                <ul className="space-y-3 text-sm text-slate-200 font-medium">
                  <li>
                    <Link href="/about/worship-info" className="hover:text-white flex items-center justify-between group">
                      <span>• 주일 예배 (1~4부)</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/school" className="hover:text-white flex items-center justify-between group">
                      <span>• 교회 학교</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/worship-info" className="hover:text-white flex items-center justify-between group">
                      <span>• 수요예배 / 금요철야기도회</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 카드 2: 교회 안내 */}
            <div className="relative rounded-2xl p-7 text-white overflow-hidden shadow-sm hover:shadow-md transition bg-gradient-to-br from-[#1a365d] via-[#1e3a5f] to-[#0c1f38] flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="w-10 h-0.5 bg-sky-300/60 mb-3" />
                <h3 className="text-2xl font-black tracking-tight mb-5 text-white">교회 안내</h3>
                <ul className="space-y-3 text-sm text-sky-100 font-medium">
                  <li>
                    <Link href="/news/bulletin" className="hover:text-white flex items-center justify-between group">
                      <span>• 온라인 주보</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-white flex items-center justify-between group">
                      <span>• 교회 소식 / 공지</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/directions" className="hover:text-white flex items-center justify-between group">
                      <span>• 교회 오시는 길</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 카드 3: 신청 및 안내 */}
            <div className="relative rounded-2xl p-7 text-white overflow-hidden shadow-sm hover:shadow-md transition bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#171923] flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="w-10 h-0.5 bg-indigo-300/60 mb-3" />
                <h3 className="text-2xl font-black tracking-tight mb-5 text-white">신청 및 안내</h3>
                <ul className="space-y-3 text-sm text-indigo-100 font-medium">
                  <li>
                    <Link href="/education" className="hover:text-white flex items-center justify-between group">
                      <span>• 새가족 교육 안내</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/directions" className="hover:text-white flex items-center justify-between group">
                      <span>• 교회 오시는 길</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/tax" className="hover:text-white flex items-center justify-between group">
                      <span>• 연말정산 기부금영수증 신청</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-900">은혜로운 말씀</h2>
            <Link href="/worship" className="text-blue-600 hover:text-blue-700 font-medium">더보기 &rarr;</Link>
          </div>
          
          {latestVideos.length === 0 ? (
             <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-gray-200">
               아직 등록된 영상이 없습니다. <Link href="/admin" className="text-blue-600 underline">관리자 페이지</Link>에서 등록해보세요.
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestVideos.map((video) => {
                // videoId가 없거나 잘못되었을 때를 대비한 기본 이미지 URL 설정
                const fallbackImg = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=600&h=338';
                const thumbUrl = video.video_id ? `https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg` : fallbackImg;

                // 로컬 스토리지에 잘못된 전체 URL이 저장되어 있을 경우를 대비한 2차 안전 파싱
                let safeVideoId = video.video_id;
                const match = safeVideoId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
                if (match && match[1]) {
                  safeVideoId = match[1];
                }

                return (
                  <div key={video.id} className="group">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-200 bg-gray-900">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${safeVideoId}?rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* 카테고리 라벨을 위로 올려 클릭을 방해하지 않게 함 */}
                      <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg shadow z-10 pointer-events-none">
                        {video.category}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{video.date}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 관련 기관 및 협력 사역 배너 (깔끔한 무테 이미지 크기 통일 배치) */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              영안장로교회 관련 기관 및 동역 사역
            </h3>
            <span className="text-[11px] text-slate-400">배너를 클릭하시면 해당 기관 사이트로 이동합니다</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 items-center justify-items-center">
            {/* 1열 4개 */}
            <a
              href="http://www.cts.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="CTS 기독교TV"
            >
              <img
                src="/images/partners/cts.jpg"
                alt="CTS 기독교TV"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://www.shinnaesenior.or.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="구립신내노인종합복지관"
            >
              <img
                src="/images/partners/shinnae.jpg"
                alt="구립신내노인종합복지관"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://www.bu.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="백석대학교"
            >
              <img
                src="/images/partners/bu.jpg"
                alt="백석대학교"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://www.igoodnews.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="아이굿뉴스"
            >
              <img
                src="/images/partners/igoodnews.jpg"
                alt="아이굿뉴스"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            {/* 2열 4개 */}
            <a
              href="http://www.younganwf.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="영안복지재단"
            >
              <img
                src="/images/partners/younganwf.jpg"
                alt="영안복지재단"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://fund.youngan.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="영안청년희망펀드"
            >
              <img
                src="/images/partners/fund.jpg"
                alt="영안청년희망펀드"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://ok.youngan.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="영안수련원"
            >
              <img
                src="/images/partners/retreat.png"
                alt="영안수련원"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>

            <a
              href="http://www.cpck.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition hover:opacity-80 p-2"
              title="한국장로교총연합회"
            >
              <img
                src="/images/partners/cpck.jpg"
                alt="한국장로교총연합회"
                className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
