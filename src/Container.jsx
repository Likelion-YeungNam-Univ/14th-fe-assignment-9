import React, { useContext } from "react";
import LangageContext from "./Langage"; 
import adbutton from "./assets/adbutton.png";
import news from "./assets/news.png";
import ad1 from "./assets/ad1button.png";
import brain from "./assets/brain.png";
import ad2 from "./assets/ad2.png";

const CONTAINER_TEXT = {
  '한국어': {
    tabs: ['뉴스스탠드', '언론사 편집', '엔터', '스포츠', '게임', '경제', '쇼핑투데이'],
    mediaCategory: '전체언론사',
    newsHeadline: '연합뉴스 · 차세대 중형위성 2호, 해외 지상국 교신...발사 성공',
    newsHome: '뉴스홈',
    moreMedia: '언론사 더보기',
    loginDesc: '네이버를 더 안전하고 편리하게 이용하세요',
    loginBtn: 'NAVER 로그인',
    findId: '아이디 찾기',
    findPw: '비밀번호 찾기',
    signUp: '회원가입',
    adTitle: '영어 거의 못하는 사람 찾습니다.',
    adSubTitle: '하루 1장 영어 체험단 모집중',
    adBrand: '뇌새김 영어',
    adApply: '지금 신청하기'
  },
  '영어': {
    tabs: ['Newsstand', 'Media Edit', 'Enter', 'Sports', 'Game', 'Economy', 'Shopping Today'],
    mediaCategory: 'All Media',
    newsHeadline: 'Yonhap News · Next-gen medium satellite No. 2 successfully communicates with overseas stations...',
    newsHome: 'News Home',
    moreMedia: 'View More Media',
    loginDesc: 'Use NAVER more safely and conveniently',
    loginBtn: 'NAVER Login',
    findId: 'Find ID',
    findPw: 'Find Password',
    signUp: 'Sign Up',
    adTitle: 'Looking for beginners who can barely speak English.',
    adSubTitle: 'Recruiting English testers for 1 page a day',
    adBrand: 'Noesaegim English',
    adApply: 'Apply Now'
  }
};

const Container = () => {
  const [langage] = useContext(LangageContext);

  const text = CONTAINER_TEXT[langage] || CONTAINER_TEXT['한국어'];

  return (
    <div className="flex justify-center mt-10">
      
      <div id="left container" className="flex flex-col items-start gap-y-4">
        <img id="ad" src={adbutton} className="h-30 w-30"/>

        <div className="border-gray-300 h-[426px] w-[830px] rounded-md border-2 p-2">
          <div className="flex text-[15px] text-gray-400 ml-4 gap-x-2">
            <span className="text-black">{text.tabs[0]}</span>
            <span>.</span>
            <span>{text.tabs[1]}</span>
            <span>/</span>
            <span>{text.tabs[2]}</span>
            <span>/</span>
            <span>{text.tabs[3]}</span>
            <span>/</span>
            <span>{text.tabs[4]}</span>
            <span>/</span>
            <span>{text.tabs[5]}</span>
            <span>/</span>
            <span>{text.tabs[6]}</span>
          </div>

          <div className="ml-4 mr-12 mb-8 h-8 w-[790px] bg-gray-100 rounded-sm flex items-center justify-between px-4 mt-2">
            <div className="flex items-center gap-x-2 text-[13px] truncate mr-4">
              <span className="font-bold shrink-0">{text.mediaCategory}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-700 truncate">{text.newsHeadline}</span>
            </div>
            <div className="text-[13px] font-medium text-gray-600 shrink-0">
              {text.newsHome}
            </div>
          </div>

          <img src={news} className="w-[790px] h-[224px] m-4 object-cover"/>

          <div className="flex items-center justify-center w-[790px] px-4 py-4 border-t border-gray-100 bg-white mt-4">
            <div className="flex items-center gap-x-5">
              <span className="text-gray-300 cursor-pointer text-lg hover:text-gray-600"> &lt; </span>
              <div className="text-[14px] flex items-center">
                <span className="text-[#4470ff] font-bold">{text.moreMedia}</span>
                <span className="ml-2 text-black font-bold">1</span>
                <span className="text-gray-300">/ 4</span>
              </div>
              <span className="text-gray-600 cursor-pointer text-lg hover:text-black"> &gt; </span>
            </div>
          </div>
        </div>
      </div>

      <div id="right container" className="flex flex-col gap-y-4 ml-8">
        
        <div className="border-gray-300 flex flex-col border-2 h-[164px] w-[420px] rounded-md justify-center items-center gap-y-2 bg-white">
          <div className="text-[12px] text-gray-600">{text.loginDesc}</div>
          <button className="bg-[#03c75a] rounded-[4px] font-bold text-[15px] justify-center items-center w-[380px] h-12 text-center mx-2 text-white hover:opacity-90">
            {text.loginBtn}
          </button>
          <div className="flex justify-center items-center gap-x-2 text-gray-500 text-[11px]">
            <span className="cursor-pointer hover:underline">{text.findId}</span>
            <span className="mx-2 text-gray-200">|</span> 
            <span className="cursor-pointer hover:underline">{text.findPw}</span>
            <span className="mx-2 text-gray-200">|</span>
            <span className="cursor-pointer hover:underline">{text.signUp}</span>
          </div>
        </div>

        <div className="border-gray-300 flex flex-col border-2 h-[240px] w-[420px] rounded-md justify-center items-center gap-y-2 bg-white p-2">
          <span className="text-lg font-bold text-black text-center w-full truncate px-2">{text.adTitle}</span>
          <div className="flex items-center justify-between w-full px-2">
            <img src={ad1} className="h-[125px] w-[191px] object-cover rounded"/>
            <div className="py-3 px-2 text-base font-medium border-t-2 border-b-2 border-gray-300 w-[195px] text-center">
              {text.adSubTitle}
            </div>
          </div>
          
          <div className="text-white rounded-full px-3 bg-blue-400 flex justify-between items-center h-[32px] w-[390px]">
            <div className="flex items-center gap-x-2">
              <img src={brain} className="rounded-full h-6 w-6 object-cover bg-white"/>
              <div className="text-xs font-bold">{text.adBrand}</div>
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer hover:opacity-90">
              <div className="text-xs font-bold">{text.adApply}</div>
              <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[8px] font-bold">&gt;</div>
            </div>
          </div>
        </div>

        <img src={ad2} className="w-[420px] h-[80px] object-cover rounded"/>
      </div>

    </div>
  );
};

export default Container;