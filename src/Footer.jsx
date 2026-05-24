import React from "react";
import ad3 from "./assets/ad3.png";
import ad4 from "./assets/ad4.png";
import ad5 from "./assets/ad5.png";
import whale from "./assets/whale.png";
import Naver from "./assets/N.png";

function Footer() {
    return (
      <div className="w-full bg-gray-100 border-t border-gray-200 py-10 mt-20 flex justify-center">
        <div className="w-[1130px] flex flex-col">
            <div className="flex justify-between items-start pb-4">
                <div className="flex gap-x-4">
                    <img src={ad3} className="h-[120px] w-[210px] rounded-lg object-cover" />
                    <div className="flex flex-col gap-y-1">
                        <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold">네이버</div>
                        <div className="font-bold text-[14px] mt-1">컬리N마트</div>
                        <div className="text-gray-500 text-[13px]">네이버에서 컬리를</div>
                        <div className="text-gray-500 text-[13px]">멤버십 2만원 이상 무료 배송</div>
                    </div>
                </div>

                <div className="flex gap-x-4">
                    <img src={ad5} className="h-[120px] w-[210px] rounded-lg object-cover" />
                    <div className="flex flex-col gap-y-1">
                        <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold">초록우산</div>
                        <div className="font-bold text-[14px] mt-1">5월은 어린이에게 기부하는 달</div>
                        <div className="text-gray-500 text-[13px]">5,000원 어린이 돕고</div>
                        <div className="text-gray-500 text-[13px]">추첨 경품 받기</div>
                    </div>
                </div>

                <div className="flex gap-x-4">
                    <img src={ad4} className="h-[120px] w-[210px] rounded-lg object-cover" />
                    <div className="flex flex-col gap-y-1">
                        <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold">네이버</div>
                        <div className="font-bold text-[14px] mt-1">선거광고 패키지 안내</div>
                        <div className="text-gray-500 text-[13px]">제9회 전국동시지방선거</div>
                        <div className="text-gray-500 text-[13px]">네이버와 함께 준비하세요</div>
                    </div>
                </div>
            </div>

            <div className="border-y-2 border-gray-200 items-start justify-between flex">
                <div className="my-6 font-bold text-[13px]">공지사항</div>
                <div className="my-6 font-bold text-[13px]">서비스 전체보기 &gt;</div>
            </div>

            <div className="border-b border-gray-200 py-6 flex justify-between items-start">

            <div className="flex flex-col gap-y-3">
    
                <div className="flex items-center gap-x-2 text-[12px] text-gray-500">
                    <div className="w-20 font-bold text-black text-[13px]">Partners</div>
                    <span>네이버 임팩트</span><span>|</span>
                    <span>네이버 비즈니스</span><span>|</span>
                    <span>네이버 비즈니스 스쿨</span><span>|</span>
                    <span>네이버 광고 등록</span><span>|</span>
                    <span>스토어 개설</span><span>|</span>
                    <span>지역업체 등록</span><span>|</span>
                    <span>엑스퍼트 등록</span>
                </div>

    
                <div className="flex items-center gap-x-2 text-[12px] text-gray-500">
                    <div className="w-20 font-bold text-black text-[13px]">Developers</div>
                    <span>네이버 개발자 센터</span><span>|</span>
                    <span>오픈 API</span><span>|</span>
                    <span>오픈소스</span><span>|</span>
                    <span>네이버 D2</span><span>|</span>
                    <span>네이버 D2SF</span><span>|</span>
                    <span>네이버 랩스</span>


                </div>
            </div>

            <div className="flex gap-x-8 items-center">
                <div className="flex items-center gap-x-3">
                    <div className="text-right">
                        <div className="font-bold text-black text-[13px]">웨일 브라우저</div>
                        <div className="text-[11px] text-gray-400 hover:underline cursor-pointer">이용안내</div>
                    </div>
                    <img src={whale} className="w-10 h-10 object-contain" alt="whale" />
                </div>

                <div className="flex items-center gap-x-3">
                    <div className="text-right">
                        <div className="font-bold text-black text-[13px]">기업 사이트</div>
                        <div className="text-[11px] text-gray-400 hover:underline cursor-pointer">바로가기</div>
                    </div>
                    <img src={Naver} className="w-9 h-9 rounded-sm object-cover" alt="naver" />
                </div>
            </div>
        </div>
        <div className="py-5 flex items-center justify-start gap-x-4 text-[12px] text-gray-500">
                <div className="flex items-center gap-x-3">
                    <span className="hover:underline cursor-pointer text-black">회사소개</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">인재채용</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">제휴제안</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">이용약관</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black font-bold">개인정보처리방침</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">청소년보호정책</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">네이버 정책</span>
                    <span className="text-gray-200">|</span>
                    <span className="hover:underline cursor-pointer text-black">고객센터</span>
                </div>
                
                <div className="ml-2 flex items-center gap-x-1">
                    <span className="font-bold text-[11px] text-black">ⓒ NAVER Corp.</span>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Footer;