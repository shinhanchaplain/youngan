'use client';

import React, { useState } from 'react';
import { FileCheck, Shield, AlertCircle, Send, CheckCircle2, User, Phone, Calendar, Lock } from 'lucide-react';
import Link from 'next/link';

export default function TaxPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    residentIdFront: '',
    residentIdBack: '',
    phone: '',
    parish: '',
    year: '2025',
    purpose: '연말정산 소득공제용',
    receiveMethod: '온라인 PDF 다운로드 (이메일 발송)',
    email: '',
    address: '',
    agreePrivacy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 이용에 동의해 주셔야 신청이 가능합니다.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 상단 타이틀 */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            교회 행정 및 증명서 발급
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            연말정산 기부금영수증 신청
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            소득세법 제34조에 따른 기부금영수증(헌금증명서)을 온라인으로 간편하게 신청하고 발급받으실 수 있습니다.
          </p>
        </div>

        {/* 본인인증 / 성도 회원 안내 배너 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  영안교회 등록 교인 전용 서비스
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  기부금영수증은 국세청 홈택스 연계 및 교적 시스템에 등록된 본인 및 직계가족에 한해 발급됩니다.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                isLoggedIn 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-blue-950 text-white hover:bg-blue-900'
              }`}
            >
              {isLoggedIn ? '교인 인증 완료 (홍길동 성도)' : '간편 교인 본인확인'}
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center shadow-xs">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">기부금영수증 신청이 접수되었습니다</h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              교회 재정부에서 교적 및 헌금 내역을 확인 후 <strong>1~2일 이내</strong>에 작성하신 이메일 또는 홈택스로 발급을 완료해 드립니다.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 max-w-sm mx-auto text-left text-xs text-slate-600 space-y-1.5 mb-6">
              <div>• 신청인: <strong>{formData.name || '홍길동'}</strong> 성도</div>
              <div>• 귀속년도: <strong>{formData.year}년도</strong></div>
              <div>• 수령방법: <strong>{formData.receiveMethod}</strong></div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition"
            >
              추가 신청하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-8">
            
            {/* 1. 신청인 정보 */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                1. 신청인(성도) 인적사항
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">성명 (실명) *</label>
                  <input
                    type="text"
                    required
                    placeholder="예: 홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">소속 교구 / 목장</label>
                  <input
                    type="text"
                    placeholder="예: 3교구 12목장"
                    value={formData.parish}
                    onChange={(e) => setFormData({ ...formData, parish: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">주민등록번호 (소득공제 필수) *</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      required
                      placeholder="앞 6자리"
                      value={formData.residentIdFront}
                      onChange={(e) => setFormData({ ...formData, residentIdFront: e.target.value })}
                      className="w-1/2 px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    <span>-</span>
                    <input
                      type="password"
                      maxLength={7}
                      required
                      placeholder="뒤 7자리"
                      value={formData.residentIdBack}
                      onChange={(e) => setFormData({ ...formData, residentIdBack: e.target.value })}
                      className="w-1/2 px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">연락처 (휴대전화) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>
            </div>

            {/* 2. 발급 신청 옵션 */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                2. 발급 내역 및 수령 방법
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">귀속 년도 *</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="2025">2025년도 귀속분 (2026년 연말정산)</option>
                    <option value="2024">2024년도 귀속분</option>
                    <option value="2023">2023년도 귀속분</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">발급 및 수령 방식 *</label>
                  <select
                    value={formData.receiveMethod}
                    onChange={(e) => setFormData({ ...formData, receiveMethod: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="국세청 홈택스 간소화 자동합산 등록">국세청 홈택스 연말정산 간소화 자동등록</option>
                    <option value="온라인 PDF 다운로드 (이메일 발송)">이메일 PDF 영수증 발송</option>
                    <option value="교회 행정실 방문 직접 수령">교회 행정실 방문 수령</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">수령 이메일 주소 *</label>
                  <input
                    type="email"
                    required
                    placeholder="example@youngan.kr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>
            </div>

            {/* 개인정보 처리 동의 */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-800">개인정보 수집 및 이용 동의 (소득세법 제160조의3)</p>
              <p>
                수집 항목: 성명, 주민등록번호, 연락처, 교구, 헌금 내역<br />
                이용 목적: 기부금영수증 발급 및 국세청 전산 제출 / 보유 기간: 관련 세법령에 따라 5년 보관 후 파기
              </p>
              <label className="flex items-center gap-2 pt-2 text-slate-900 font-bold cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="rounded text-blue-900 focus:ring-blue-900 w-4 h-4"
                />
                위 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            {/* 제출 버튼 */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-2xl transition shadow-sm text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> 기부금영수증 발급 신청하기
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
