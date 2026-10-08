'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('주일설교');
  const [isSaved, setIsSaved] = useState(false);

  // 저장 함수 (일단 로컬 스토리지에 저장하여 바로 확인 가능하도록 구현)
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유튜브 URL에서 Video ID 추출
    let videoId = '';
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (match && match[1]) {
      videoId = match[1];
    } else {
      alert('올바른 유튜브 링크를 입력해주세요.');
      return;
    }

    const newVideo = {
      id: Date.now().toString(),
      title,
      videoId,
      category,
      date: new Date().toISOString().split('T')[0], // 오늘 날짜
    };

    // 기존 영상들 가져오기
    const savedVideos = JSON.parse(localStorage.getItem('youngan_videos') || '[]');
    const updatedVideos = [newVideo, ...savedVideos]; // 최신순으로 맨 앞에 추가
    
    localStorage.setItem('youngan_videos', JSON.stringify(updatedVideos));
    
    setIsSaved(true);
    setTitle('');
    setVideoUrl('');
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">관리자 페이지</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">영상 추가하기</h2>
        
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">분류 (카테고리)</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="주일설교">주일설교</option>
              <option value="예배영상">예배영상</option>
              <option value="행사및집회">행사 및 집회</option>
              <option value="교회뉴스">교회뉴스</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">영상 제목</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: [주일2부] 믿음으로 승리하는 삶"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">유튜브 동영상 링크</label>
            <input 
              type="url" 
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="예: https://www.youtube.com/watch?v=xxxxxx"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-800 transition-colors"
          >
            영상 등록하기
          </button>

          {isSaved && (
            <p className="text-green-600 text-center font-medium mt-4">
              성공적으로 등록되었습니다! (메인 페이지나 예배영상 메뉴에서 확인하세요)
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
