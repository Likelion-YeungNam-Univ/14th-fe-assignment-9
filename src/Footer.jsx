import React, { useContext } from "react";
import LangageContext from "./Langage"; 
import ad3 from "./assets/ad3.png";
import ad4 from "./assets/ad4.png";
import ad5 from "./assets/ad5.png";
import whale from "./assets/whale.png";
import Naver from "./assets/N.png";

const FOOTER_TEXT = {
  '한국어': {
    ad1Badge: '네이버',
    ad1Title: '컬리N마트',
    ad1Desc1: '네이버에서 컬리를',
    ad1Desc2: '멤버십 2만원 이상 무료 배송',
    
    ad2Badge: '초록우산',
    ad2Title: '5월은 어린이에게 기부하는 달',
    ad2Desc1: '5,000원 어린이 돕고',
    ad2Desc2: '추첨 경품 받기',
    
    ad3Badge: '네이버',
    ad3Title: '선거광고 패키지 안내',
    ad3Desc1: '제9회 전국동시지방선거',
    ad3Desc2: '네이버와 함께 준비하세요',
    
    notice: '공지사항',
    viewAll: '서비스 전체보기 >',
    
    partners: ['네이버 임팩트', '네이버 비즈니스', '네이버 비즈니스 스쿨', '네이버 광고 등록', '스토어 개설', '지역업체 등록', '엑스퍼트 등록'],
    developers: ['네이버 개발자 센터', '오픈 API', '오픈소스', '네이버 D2', '네이버 D2SF', '네이버 랩스'],
    
    whaleTitle: '웨일 브라우저',
    whaleGuide: '이용안내',
    corpTitle: '기업 사이트',
    corpLink: '바로가기',
    
    bottomLinks: ['회사소개', '인재채용', '제휴제안', '이용약관', '개인정보처리방침', '청소년보호정책', '네이버 정책', '고객센터']
  },
  '영어': {
    ad1Badge: 'NAVER',
    ad1Title: 'Kurly N Mart',
    ad1Desc1: 'Kurly meets NAVER',
    ad1Desc2: 'Free shipping over 20,000 KRW',
    
    ad2Badge: 'ChildFund',
    ad2Title: 'May is Donation Month',
    ad2Desc1: 'Help children with 5,000 KRW',
    ad2Desc2: 'Win dynamic giveaway prizes',
    
    ad3Badge: 'NAVER',
    ad3Title: 'Election Ad Package',
    ad3Desc1: 'The 9th Local Elections',
    ad3Desc2: 'Get ready with NAVER',
    
    notice: 'Notice',
    viewAll: 'All Services >',
    
    partners: ['NAVER Impact', 'NAVER Business', 'NAVER Business School', 'NAVER Ad Registration', 'Open a Store', 'Register Local Business', 'Register Expert'],
    developers: ['NAVER Developers', 'Open API', 'Open Source', 'NAVER D2', 'NAVER D2SF', 'NAVER Labs'],
    
    whaleTitle: 'Whale Browser',
    whaleGuide: 'Guide',
    corpTitle: 'Corporate Site',
    corpLink: 'Shortcut',
    
    bottomLinks: ['Corporate Info', 'Careers', 'Partnership', 'Terms of Service', 'Privacy Policy', 'Youth Protection', 'NAVER Policies', 'Help Center']
  }
};

function Footer() {
  const [langage] = useContext(LangageContext);
  const text = FOOTER_TEXT[langage] || FOOTER_TEXT['한국어'];

  return (
    <div className="w-full bg-gray-100 border-t border-gray-200 py-10 mt-20 flex justify-center">
      <div className="w-[1130px] flex flex-col">
        
        <div className="flex justify-between items-start pb-4">
          <div className="flex gap-x-4 w-[350px]">
            <img src={ad3} className="h-[120px] w-[210px] rounded-lg object-cover shrink-0" />
            <div className="flex flex-col gap-y-1 min-w-0">
              <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold shrink-0">{text.ad1Badge}</div>
              <div className="font-bold text-[14px] mt-1 truncate">{text.ad1Title}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad1Desc1}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad1Desc2}</div>
            </div>
          </div>

          <div className="flex gap-x-4 w-[350px]">
            <img src={ad5} className="h-[120px] w-[210px] rounded-lg object-cover shrink-0" />
            <div className="flex flex-col gap-y-1 min-w-0">
              <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold shrink-0">{text.ad2Badge}</div>
              <div className="font-bold text-[14px] mt-1 truncate">{text.ad2Title}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad2Desc1}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad2Desc2}</div>
            </div>
          </div>

          <div className="flex gap-x-4 w-[350px]">
            <img src={ad4} className="h-[120px] w-[210px] rounded-lg object-cover shrink-0" />
            <div className="flex flex-col gap-y-1 min-w-0">
              <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 w-fit rounded-sm font-bold shrink-0">{text.ad3Badge}</div>
              <div className="font-bold text-[14px] mt-1 truncate">{text.ad3Title}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad3Desc1}</div>
              <div className="text-gray-500 text-[13px] truncate">{text.ad3Desc2}</div>
            </div>
          </div>
        </div>

        <div className="border-y-2 border-gray-200 items-start justify-between flex">
          <div className="my-6 font-bold text-[13px] cursor-pointer hover:underline">{text.notice}</div>
          <div className="my-6 font-bold text-[13px] cursor-pointer hover:underline">{text.viewAll}</div>
        </div>

        <div className="border-b border-gray-200 py-6 flex justify-between items-start">
          <div className="flex flex-col gap-y-3">
            {/* Partners 행 */}
            <div className="flex items-center gap-x-2 text-[12px] text-gray-500 flex-wrap">
              <div className="w-20 font-bold text-black text-[13px] shrink-0">Partners</div>
              {text.partners.map((link, i) => (
                <React.Fragment key={i}>
                  <span className="cursor-pointer hover:underline">{link}</span>
                  {i < text.partners.length - 1 && <span className="text-gray-300">|</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center gap-x-2 text-[12px] text-gray-500 flex-wrap">
              <div className="w-20 font-bold text-black text-[13px] shrink-0">Developers</div>
              {text.developers.map((link, i) => (
                <React.Fragment key={i}>
                  <span className="cursor-pointer hover:underline">{link}</span>
                  {i < text.developers.length - 1 && <span className="text-gray-300">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex gap-x-8 items-center shrink-0">
            <div className="flex items-center gap-x-3">
              <div className="text-right">
                <div className="font-bold text-black text-[13px]">{text.whaleTitle}</div>
                <div className="text-[11px] text-gray-400 hover:underline cursor-pointer">{text.whaleGuide}</div>
              </div>
              <img src={whale} className="w-10 h-10 object-contain" alt="whale" />
            </div>

            <div className="flex items-center gap-x-3">
              <div className="text-right">
                <div className="font-bold text-black text-[13px]">{text.corpTitle}</div>
                <div className="text-[11px] text-gray-400 hover:underline cursor-pointer">{text.corpLink}</div>
              </div>
              <img src={Naver} className="w-9 h-9 rounded-sm object-cover" alt="naver" />
            </div>
          </div>
        </div>

        <div className="py-5 flex items-center justify-start gap-x-4 text-[12px] text-gray-500 flex-wrap">
          <div className="flex items-center gap-x-3 flex-wrap">
            {text.bottomLinks.map((link, i) => (
              <React.Fragment key={i}>
                <span className={`hover:underline cursor-pointer text-black ${link === '개인정보처리방침' || link === 'Privacy Policy' ? 'font-bold' : ''}`}>
                  {link}
                </span>
                {i < text.bottomLinks.length - 1 && <span className="text-gray-200">|</span>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="flex items-center gap-x-1 shrink-0">
            <span className="font-bold text-[11px] text-black">ⓒ NAVER Corp.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;