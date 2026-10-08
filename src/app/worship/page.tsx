'use client';

import { useEffect, useState } from 'react';
import { PlayCircle, Trash2, Plus, LogIn, LogOut } from 'lucide-react';

import { supabase } from '@/lib/supabase';

interface Video {
  id: string;
  title: string;
  video_id: string; // DB 컬럼명으로 통일
  category: string;
  date: string;
}

export default function WorshipPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filter, setFilter] = useState('전체');
  
  // 관리자 모드 토글 (실제로는 로그인 세션으로 처리)
  const [isAdmin, setIsAdmin] = useState(false);

  // 폼 상태
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCategory, setNewCategory] = useState('주일설교');

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setVideos(data);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    let videoId = '';
    const match = newUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (match && match[1]) {
      videoId = match[1];
    } else {
      alert('올바른 유튜브 링크를 입력해주세요.');
      return;
    }

    const { data, error } = await supabase
      .from('videos')
      .insert([
        { title: newTitle, video_id: videoId, category: newCategory }
      ])
      .select();

    if (error) {
      alert('등록 중 오류가 발생했습니다.');
      console.error(error);
    } else if (data) {
      setVideos([data[0], ...videos]);
      setNewTitle('');
      setNewUrl('');
      alert('영상이 성공적으로 등록되었습니다.');
    }
  };

  const handleDelete = async (id: string) => {
    if(confirm('이 영상을 삭제하시겠습니까?')) {
      const { error } = await supabase.from('videos').delete().eq('id', id);
      if (!error) {
        setVideos(videos.filter(v => v.id !== id));
      } else {
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  const categories = ['전체', '주일설교', '예배영상', '행사및집회', '교회뉴스'];
  const filteredVideos = filter === '전체' ? videos : videos.filter(v => v.category === filter);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
        >
          {isAdmin ? <><LogOut className="w-4 h-4 mr-1"/> 관리자 모드 종료</> : <><LogIn className="w-4 h-4 mr-1"/> 임시 관리자 로그인</>}
        </button>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">예배와 방송</h1>
        <p className="text-gray-500">영안장로교회의 은혜로운 말씀과 생생한 사역의 현장을 영상으로 만나보세요.</p>
      </div>

      {/* 카테고리 탭 */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
              filter === cat 
                ? 'bg-blue-900 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 관리자 입력 폼 */}
      {isAdmin && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-1" /> 새 영상 등록하기 (관리자)
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4">
            <select 
              value={newCategory} 
              onChange={e => setNewCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md bg-white text-black font-medium focus:ring-blue-500"
            >
              <option value="주일설교">주일설교</option>
              <option value="예배영상">예배영상</option>
              <option value="행사및집회">행사 및 집회</option>
              <option value="교회뉴스">교회뉴스</option>
            </select>
            <input 
              type="text" 
              placeholder="영상 제목을 입력하세요" 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              required
              className="flex-1 p-2 border border-gray-300 rounded-md bg-white text-black font-medium focus:ring-blue-500 placeholder-gray-400"
            />
            <input 
              type="url" 
              placeholder="유튜브 URL (예: https://youtu.be/...)" 
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              required
              className="flex-1 p-2 border border-gray-300 rounded-md bg-white text-black font-medium focus:ring-blue-500 placeholder-gray-400"
            />
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700">
              등록
            </button>
          </form>
        </div>
      )}

      {/* 리스트 (게시판) 형태 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-600 text-sm text-center">
          <div className="col-span-1">번호</div>
          <div className="col-span-2">분류</div>
          <div className="col-span-6 text-left">제목 (클릭시 재생)</div>
          <div className="col-span-2">등록일</div>
          {isAdmin && <div className="col-span-1">관리</div>}
        </div>
        
        {filteredVideos.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            등록된 영상이 없습니다.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredVideos.map((video, index) => (
              <div key={video.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
                <div className="hidden md:block col-span-1 text-center text-gray-400 text-sm">
                  {filteredVideos.length - index}
                </div>
                <div className="col-span-12 md:col-span-2 text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">
                    {video.category}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                  {/* 작은 썸네일 */}
                  <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer" className="shrink-0 relative w-24 aspect-video rounded overflow-hidden">
                    <img src={`https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`} className="w-full h-full object-cover" alt="썸네일"/>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </a>
                  {/* 제목 */}
                  <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer" className="text-gray-900 font-medium hover:text-blue-600 hover:underline line-clamp-2">
                    {video.title}
                  </a>
                </div>
                <div className="hidden md:block col-span-2 text-center text-gray-500 text-sm">
                  {video.date}
                </div>
                {isAdmin && (
                  <div className="col-span-12 md:col-span-1 text-center">
                    <button onClick={() => handleDelete(video.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
