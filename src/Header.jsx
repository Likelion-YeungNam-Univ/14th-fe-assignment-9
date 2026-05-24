import React from "react";
import button1 from "./assets/button1.png";
import button2 from "./assets/button2.png";
import button3 from "./assets/button3.png";
import button4 from "./assets/button4.png";
import searchbutton from "./assets/searchbutton.png";
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
import ThemeContext from "./Theme";
import { BiAdjust } from "react-icons/bi";

const Header = () =>{
    const [theme, setTheme] = React.useContext(ThemeContext);
    return (
        <div className={`p-2 ${theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white'}`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">    
                    <img src={button1} className="w-8 h-8 m-2"/>
                    <img src={button2} className="w-8 ml-2"/>
                </div>
                <div className="flex items-center">
                    <button src={onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="bg-gray-300 text-gray-800 px-2 py-1 rounded"/>
                    <img src={button3} className="w-8 h-8 m-2"/>
                    <img src={button4} className="w-8 h-8 m-2"/>
                </div>
            </div>

            <div className="flex justify-center">
                <img src={searchbutton} className="w-100 h-20 mt-10 mb-10"></img>
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