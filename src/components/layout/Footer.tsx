import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 교회 주소 및 연락처 정보 */}
          <div className="space-y-2 text-center md:text-left text-xs sm:text-sm text-gray-400">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
              <span><strong>Tel:</strong> 02-3423-0451</span>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <span><strong>Fax:</strong> 02-3423-0458</span>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <span><strong>E-mail:</strong> sys01@youngan.ne.kr</span>
            </div>
            <p className="text-gray-400">
              Copyright © 1980 by <strong className="text-gray-200">영안장로교회</strong> (서울특별시 중랑구 신내로15길 179 · 담임 양병희 목사)
            </p>
          </div>

          {/* 소셜 및 교회 공식 채널 링크 & 고해상도 교회 공식 로고 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <a 
                href="https://www.youtube.com/channel/UC7dqZ-I9ZnUOhPMnkVD_bEQ" 
                target="_blank" 
                rel="noopener noreferrer"
                title="영안장로교회 공식 유튜브"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a 
                href="http://www.youngan.or.kr/main/index.php?mode=blog" 
                target="_blank" 
                rel="noopener noreferrer"
                title="영안교회 블로그 / 나눔터"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition shadow-xs text-xs font-black"
              >
                B
              </a>

              <a 
                href="https://www.facebook.com/yapc1980" 
                target="_blank" 
                rel="noopener noreferrer"
                title="영안장로교회 페이스북"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-xs">
              <Link href="/" className="inline-block">
                <img
                  src="/images/church_logo_hd.png"
                  alt="영안장로교회"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
