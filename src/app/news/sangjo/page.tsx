import React from 'react';
import Link from 'next/link';
import { Phone, HeartHandshake, Calendar, FileText, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SangjoPage() {
  const steps = [
    {
      day: "1일차",
      badge: "임종 및 수시 (첫째 날)",
      color: "from-blue-600 to-indigo-700",
      items: [
        {
          title: "1. 임종 (유언 및 연락 준비)",
          desc: "담당 교구 목사님 및 교역자에게 즉시 연락하여 임종예배를 준비하고 지인에게 연락합니다. 영정사진, 주민등록증 또는 건강보험증을 준비합니다."
        },
        {
          title: "2. 수시 (고인 정돈 및 운구)",
          desc: "고인을 깨끗한 옷으로 정돈하고, 전문 장례지도사와 상의합니다. 앰뷸런스 및 운구 차량을 통해 고인을 장례식장으로 정중히 운구합니다."
        },
        {
          title: "3. 장례식장 안치 및 빈소 설치",
          desc: "안치실 확인 후 빈소를 결정합니다. 제단 장식, 헌화용 생화 준비, 찬송 및 추모 음악을 준비하며 담당 목사님과 장례 일정(입관·발인·하관)을 수립합니다."
        },
        {
          title: "장례 행정 안내",
          desc: "사망진단서(사체검안서) 8부 가량 발급 (사망신고, 장제비 청구, 보험 청구 등에 활용)."
        }
      ]
    },
    {
      day: "2일차",
      badge: "염습 및 입관예배 (둘째 날)",
      color: "from-slate-700 to-gray-800",
      items: [
        {
          title: "4. 염습 및 입관",
          desc: "기독교 장례 예식에 맞는 용품(관보, 십자가 명정 등)을 사용하여 경건하게 염습과 입관을 진행합니다."
        },
        {
          title: "5. 입관예배 및 성복",
          desc: "담임 목사님 또는 담당 교역자의 집례로 입관예배를 드립니다. 상주는 정결한 상복(검정 양복/단정한 복장)으로 갈아입고 주님의 위로를 구합니다."
        },
        {
          title: "6. 조문객 맞이 (위로예배)",
          desc: "성복 및 입관예배 후 성도 및 지인들의 조문을 받으며, 구역·교구 성도들과 함께 위로예배를 지속적으로 드립니다."
        },
        {
          title: "7. 상조 회비 및 실비 정산",
          desc: "빈소 사용료 및 제반 장례비용, 상조회비 등을 사전에 정산 점검합니다."
        }
      ]
    },
    {
      day: "3일차",
      badge: "발인 및 하관/추모예배 (셋째 날)",
      color: "from-sky-700 to-blue-900",
      items: [
        {
          title: "8. 발인 준비 및 발인예배",
          desc: "발인 1시간 전 개인물품 및 장지 물품을 차량에 적재하고, 담임 목사님의 집례 하에 천국 환송 발인예배를 엄숙하게 거행합니다."
        },
        {
          title: "9. 운구 및 장지 출발",
          desc: "고인 운구 리무진 및 성도·유족 차량에 탑승하여 장지로 출발합니다. 장지에 필요한 매장/화장 서류를 최종 점검합니다."
        },
        {
          title: "10. 장지 (화장 / 매장 하관예배)",
          desc: "화장 시: 화장 후 유골 수습 및 봉안당(납골당) 안치 추모예배를 진행합니다.\n매장 시: 묘지 취토 및 평토 후 천국 소망의 하관예배를 드립니다."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">홈</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span>공지와 소통</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">상조정보</span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-4">
            <HeartHandshake className="w-4 h-4" /> 천국 환송 및 장례 지원
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            영안장로교회 상조정보 및 장례절차 안내
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            성도의 생명과 부활의 소망을 함께 나누며, 슬픔을 당한 유가족을 주님의 사랑과 기도로 위로하고 경건한 천국 환송 예식을 돕습니다.
          </p>

          {/* 비상 연락망 박스 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left">
              <span className="text-xs font-bold text-amber-800">교회 사무실</span>
              <p className="text-lg font-black text-amber-950 mt-1">02-3423-0451</p>
              <p className="text-xs text-amber-700 mt-0.5">평일 및 주말 교역자실 연결</p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-left">
              <span className="text-xs font-bold text-blue-800">상조위원회 담당</span>
              <p className="text-lg font-black text-blue-950 mt-1">교구 담당 교역자</p>
              <p className="text-xs text-blue-700 mt-0.5">임종 즉시 교구 목사님께 연락</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-left">
              <span className="text-xs font-bold text-slate-700">팩스 번호</span>
              <p className="text-lg font-black text-slate-900 mt-1">02-3423-0458</p>
              <p className="text-xs text-slate-600 mt-0.5">부고 및 제반 서류 접수</p>
            </div>
          </div>
        </div>

        {/* 중요 안내 사항 */}
        <div className="bg-amber-50/70 border-l-4 border-amber-500 p-5 rounded-r-2xl mb-10 text-amber-950">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm space-y-1">
              <p className="font-bold">임종 시 유의사항</p>
              <p>성도의 임종이 임박했을 때 지체 없이 담당 교구 목사님께 연락하여 천국 소망을 확신하는 <strong>임종예배</strong>를 드리도록 준비해 주시기 바랍니다.</p>
              <p>교회 상조회는 성경적 신앙 원리에 따라 분향 대신 헌화와 기도로 경건하고 절제된 기독교 장례를 지원합니다.</p>
            </div>
          </div>
        </div>

        {/* 3일간 장례 절차 로드맵 */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`p-5 md:px-8 bg-gradient-to-r ${step.color} text-white flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <span className="text-xl md:text-2xl font-black">{step.day}</span>
                  <span className="text-sm md:text-base font-semibold text-white/90">{step.badge}</span>
                </div>
                <Calendar className="w-6 h-6 text-white/60" />
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {step.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start space-x-4 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1 whitespace-pre-line leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 상조회 운영 및 지원 안내 */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            영안교회 상조회 운영 규정 요약
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-2">예배 및 집례 지원</h5>
              <p className="leading-relaxed">
                임종예배, 입관예배, 발인예배, 하관예배에 담임 목사님 및 부교역자, 성가대, 교구 중보기도팀이 함께하여 천국 환송을 위해 전심으로 기도하고 섬깁니다.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h5 className="font-bold text-slate-900 mb-2">물품 및 장례 지원</h5>
              <p className="leading-relaxed">
                기독교 예식에 부합하는 장례 용품(관보, 십자가 명정, 위로 리본 등)을 구비하여 정성을 다해 섬기며, 유가족의 부담을 덜어드립니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
