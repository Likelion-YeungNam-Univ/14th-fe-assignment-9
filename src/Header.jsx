import React from "react";
import button1 from "./assets/button1.png";
import button2 from "./assets/button2.png";
import button3 from "./assets/button3.png";
import button4 from "./assets/button4.png";
import Naver from "./assets/Naver.png";
import mailbutton from "./assets/mailbutton.png";
import cafebutton from "./assets/cafebutton.png";
import blogbutton from "./assets/blogbutton.png";
import storebutton from "./assets/storebutton.png";
import newsbutton from "./assets/newsbutton.png";
import stockbutton from "./assets/stockbutton.png";
import realtybutton from "./assets/realtybutton.png";
import mapbutton from "./assets/mapbutton.png";
import webtoonbutton from "./assets/webtoonbutton.png";
import livebutton from "./assets/livebutton.png";
import morebutton from "./assets/morebutton.png";
import LangageContext from "./Langage";
import { BsFillKeyboardFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const Header = () =>{
    const [langage, setLangage] = React.useContext(LangageContext);
    return (
        <div className='p-2 flex flex-col items-center w-full'>
            <div className="flex justify-between items-center mb-4 w-full">
                <div className="flex items-center">    
                    <img src={button1} className="w-8 h-8 m-2"/>
                    <img src={button2} className="w-8 ml-2"/>
                </div>
                <div className="flex items-center">
                    <button onClick={() => setLangage(langage === '한국어' ? '영어' : '한국어')} className="hover:bg-gray-400 hover:text-white shadow-black bg-white text-gray-800 px-2 py-1 rounded">
                        {langage === '한국어' ? '한국어' : '영어'}
                    </button>
                    <img src={button3} className="w-8 h-8 m-2"/>
                    <img src={button4} className="w-8 h-8 m-2"/>
                </div>
            </div>

            <div className="flex items-center justify-between h-12 w-[600px] rounded-full border-2 border-green-500 bg-white px-4 shadow-sm focus-within:ring-2 focus-within:ring-[#03C75A]/20">
                <input 
                    type="text"
                    className="w-full bg-transparent pr-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none" 
                    placeholder="검색어를 입력해 주세요" 
                />

                <div className="flex items-center gap-3 shrink-0">
                    <button type="button" className="text-gray-400 hover:text-gray-600">
                    <BsFillKeyboardFill size={20} />
                    </button>
                
                    <button type="button" className="text-[#03C75A] hover:opacity-80">
                    <BsSearch size={18} />
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-start gap-x-2">
                <div id="mail" className="w-16 flex flex-col items-center">
                    <img src={mailbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">메일</div>
                </div>

                <div id="cafe" className="w-16 flex flex-col items-center">
                    <img src={cafebutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">카페</div>
                </div>

                <div id="blog" className="w-16 flex flex-col items-center">
                    <img src={blogbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">블로그</div>
                </div>

                <div id="news" className="w-16 flex flex-col items-center">
                    <img src={newsbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">뉴스</div>
                </div>

                <div id="stock" className="w-16 flex flex-col items-center">
                    <img src={stockbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">증권</div>
                </div>

                <div id="realty" className="w-16 flex flex-col items-center">
                    <img src={realtybutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">부동산</div>
                </div>

                <div id="map" className="w-16 flex flex-col items-center">
                    <img src={mapbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">지도</div>
                </div>

                <div id="webtoon" className="w-16 flex flex-col items-center">
                    <img src={webtoonbutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">웹툰</div>
                </div>

                <div id="live" className="w-16 flex flex-col items-center">
                    <img src={livebutton} className="w-10 h-10 mb-1"/>
                    <div className="text-sm text-center">치지직</div>
                </div>

                <div id="more" className="w-16 flex flex-col items-center">
                    <img src={morebutton} className="w-10 h-10 mb-1"/>
                </div>
                
            </div>
        </div>
    )
}

export default Header