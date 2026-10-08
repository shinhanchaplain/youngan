import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsList } from '@/data/newsData';
import { ArrowLeft, Calendar, User, Download, FileText, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return newsList.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  
  const newsIndex = newsList.findIndex((item) => item.id === numericId);
  if (newsIndex === -1) {
    notFound();
  }

  const post = newsList[newsIndex];
  const prevPost = newsIndex < newsList.length - 1 ? newsList[newsIndex + 1] : null;
  const nextPost = newsIndex > 0 ? newsList[newsIndex - 1] : null;

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 상단 네비게이션 */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            목록으로 돌아가기
          </Link>
          <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            교회 소식
          </span>
        </div>

        {/* 본문 카드 */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* 헤더 */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs px-2.5 py-1 rounded font-bold ${
                post.type === '공지' 
                  ? 'bg-red-50 text-red-600 border border-red-100' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}>
                {post.type}
              </span>
              <span className="text-xs text-gray-400">No. {post.id}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 pt-4 border-t border-gray-50">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* 첨부파일 다운로드 영역 (있을 경우) */}
          {post.hasFile && (
            <div className="bg-slate-50 border-b border-gray-100 px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-sm text-gray-700">
                <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-semibold text-gray-900">첨부파일:</span>
                <span className="text-gray-600 font-medium break-all">{post.fileName || '첨부자료.pdf'}</span>
              </div>
              <a 
                href={post.fileUrl || '#'}
                download={post.fileName || true}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition shadow-xs shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                파일 다운로드
              </a>
            </div>
          )}

          {/* 본문 내용 */}
          <div className="p-8 sm:p-10">
            <div className="prose max-w-none text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
              {post.content}
            </div>
          </div>

          {/* 하단 공유 / 안내 바 */}
          <div className="px-8 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>대한예수교장로회 영안교회 홍보위원회</span>
            <span>문의: 교회 사무국 (02-490-7000)</span>
          </div>
        </article>

        {/* 이전글 / 다음글 이동 네비게이션 */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden shadow-xs">
          {nextPost ? (
            <Link 
              href={`/news/${nextPost.id}`}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition text-sm group"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-blue-600 shrink-0">
                  <ChevronLeft className="w-4 h-4 mr-0.5" /> 이전글
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 truncate font-medium">
                  {nextPost.title}
                </span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4">{nextPost.date}</span>
            </Link>
          ) : (
            <div className="p-4 flex items-center text-sm text-gray-400">
              <span className="text-xs font-semibold mr-3">이전글</span> 최신 공지글입니다.
            </div>
          )}

          {prevPost ? (
            <Link 
              href={`/news/${prevPost.id}`}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition text-sm group"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-blue-600 shrink-0">
                  <ChevronRight className="w-4 h-4 mr-0.5" /> 다음글
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 truncate font-medium">
                  {prevPost.title}
                </span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4">{prevPost.date}</span>
            </Link>
          ) : (
            <div className="p-4 flex items-center text-sm text-gray-400">
              <span className="text-xs font-semibold mr-3">다음글</span> 마지막 공지글입니다.
            </div>
          )}
        </div>

        {/* 중앙 목록 버튼 */}
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition shadow-sm"
          >
            목록으로
          </Link>
        </div>

      </div>
    </div>
  );
}
