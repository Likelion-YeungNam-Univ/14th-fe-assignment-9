import React from "react";
import adbutton from "./assets/adbutton.png";
import news from "./assets/news.png";
import ad1 from "./assets/ad1button.png";
import brain from "./assets/brain.png";
import ad2 from "./assets/ad2.png";
const Container = () => {
    return (
    <div className="flex justify-center mt-10">
        <div id="left container" className="flex flex-col items-start gap-y-4">
            <img id="ad" src={adbutton} className="h-30 w-30"/>

            <div className="border-gray-300 h-[426px] w-[830px] rounded-md border-2 p-2">
                <div className="flex text-[15px] text-gray-400 ml-4 gap-x-2">
                    <span className="text-black">뉴스트랜드</span>
                    <span>.</span>
                    <span>언론사 편집</span>
                    <span>/</span>
                    <span>엔터</span>
                    <span>/</span>
                    <span>스포츠</span>
                    <span>/</span>
                    <span>게임</span>
                    <span>/</span>
                    <span>경제</span>
                    <span>/</span>
                    <span>쇼핑투데이</span>
                </div>
                <div className="ml-4 mr-12 mb-8 h-8 w-[790px] bg-gray-100 rounded-sm flex items-center justify-between px-4 mt-2">
                    <div className="flex items-center gap-x-2 text-[13px]">
                        <span className="font-bold">전체언론사</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-700">연합뉴스 · 차세대 중형위성 2호, 해외 지상국 교신...발사 성공</span>
                    </div>

                    <div className="text-[13px] font-medium text-gray-600">
                        뉴스홈
                    </div>
                </div>
                <img src={news} className="w-790 h-224 m-4"/>
                <div className="flex items-center justify-center w-[790px] px-4 py-4 border-t border-gray-100 bg-white mt-4">

                    <div className="flex items-center gap-x-5">
                        <span className="text-gray-300 cursor-pointer text-lg hover:text-gray-600"> &lt; </span>
                    <div className="text-[14px] flex items-center">
                        <span className="text-[#4470ff] font-bold">언론사 더보기</span>
                        <span className="ml-2 text-black font-bold">1</span>
                        <span className="text-gray-300">/ 4</span>
                    </div>
                    <span className="text-gray-600 cursor-pointer text-lg hover:text-black"> &gt; </span>
                    </div>
                </div>
            </div>
        </div>

        <div id="right container" className="flex flex-col gap-y-4 ml-8">
            <div className="border-gray-300 flex flex-col border-2 h-[164px] w-[420px] rounded-md justify-center items-center gap-y-2">
                <div className="text-[12px] text-gray-600">네이버를 더 안전하고 편리하게 이용하세요</div>
                <button className="bg-[#03c75a] rounded-[4px] font-bold text-[15px] justify-center items-center w-[380px] h-12 text-center mx-2 text-white">NAVER 로그인</button>
                <div className="flex justify-center items-center gap-x-2 text-gray-500 text-[11px]">
                    <span>아이디 찾기</span>
                    <span className="mx-2 text-gray-200">|</span> 
                    <span>비밀번호 찾기</span>
                    <span className="mx-2 text-gray-200">|</span>
                    <span>회원가입</span>
                </div>
            </div>
            <div className="border-gray-300 flex flex-col border-2 h-[240px] w-[420px] rounded-md justify-center items-center gap-y-2">
                <span className="text-xl font-bold text-black">영어 거의 못하는 사람 찾습니다.</span>
                <div className="flex">
                    <img src={ad1} className="h-[125px] w-[191px]"/>
                    <div className="mt-4 py-3 px-4 text-xl border-t-2 border-b-2 border-gray-300">하루 1장 영어 체험단 모집중</div>
                </div>
                <div className="text-white rounded-full gap-x-2 px-3 bg-blue-300 flex justify-between h-[30px] w-[400px]">
                    <div className="flex items-center gap-x-2">
                        <img src={brain} className="rounded-full h-6 w-6"/>
                        <div>뇌새김 영어</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="text-sm font-bold">지금 신청하기</div>
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-[10px]">&gt;</div>
                    </div>
                </div>
            </div>
            <img src={ad2} className="w-[420px] h-[80px]"/>
        </div>
    </div>
    )
}
export default Container