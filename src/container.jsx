import React, { useContext } from 'react';
import Ad_Long from './image/LikeLionAdLong.png';
import Shop from './image/LikeLionShop.png';
import Profile from './image/ProfileImg.png';
import Setting from './image/Setting.png';
import ThemeContext from './ThemeContext';


const newsSelect_sty ="w-auto h-10 font-bold  flex flex-col text-gray-400"
const newsSep_sty ="w-auto h-6 font-black text-sm flex flex-col justify-center text-gray-300 px-2.5"

const accountSelect_sty ="font-light text-xs flex flex-col text-gray-400"
const accountSep_sty ="font-light text-xs flex flex-col justify-center text-gray-300 px-2.5"

const myView_Select_sty ="font-black text-sm flex flex-col mx-3"
const myView_Sep_sty ="font-light text-sm flex flex-col justify-center text-gray-300 px-2.5"

const Container = () => {
  
  const { isDark } = useContext(ThemeContext);

  const bg_color_style = isDark ? 'bg-black' : 'bg-white'
  const bg2_color_style = isDark ? 'bg-gray-700' : 'bg-gray-100'
  const card_color_style = isDark ? 'bg-gray-900' : 'bg-white'
  const border_color = isDark ? 'border-gray-700' : 'border-gray-200'

  
  return (
    <div id="container" className={`w-full py-[20px] px-3 ${bg_color_style}`}>
      <div className="mx-auto flex w-full max-w-[1200px] gap-8">
        <div id="container_lt" className={`w-[800px] h-[600px] flex flex-col gap-3 ${bg_color_style}`}>
            <div id="Ad_container" className={`overflow-hidden border-[1px] rounded-xl ${border_color} ${card_color_style}`}>
              <img src={Ad_Long} className="h-auto w-full "></img>
            </div>
            <div id="news_container" className={`w-[800px] h-[550px] border-[1px] rounded-xl ${border_color} ${card_color_style}`}>
              <div id="selectButton" className="flex px-5 pt-4">
                <div className={newsSelect_sty}>뉴스트랜드•언론사편집</div>
                <div className={newsSep_sty}>/</div>
                <div className={newsSelect_sty}>엔터</div>
                <div className={newsSep_sty}>/</div>
                <div className={newsSelect_sty}>게임</div>
                <div className={newsSep_sty}>/</div>
                <div className={newsSelect_sty}>경제</div>
                <div className={newsSep_sty}>/</div>
                <div className={`w-auto h-10 font-bold flex flex-col ${isDark ? 'text-white' : 'text-black'}`}>쇼핑투데이</div>
              </div>
              <div id="ContentHeader" className={`flex justify-between mx-5 px-7 py-4 rounded-l-sm rounded-r-sm ${bg2_color_style}`}>
                <div className="flex">
                  <div className="text-sm">브랜드 데이</div>
                  <div className="text-gray-300 px-3 text-sm font-black">|</div>
                  <div className="text-sm">멋사대학 캄포 소파 외 단독 최대 50% 할인! 라이브 특별 혜택까지</div>
                </div>
                <div>
                  <div className="text-sm font-bold flex justify-end">마이쇼핑</div>
                </div>
              </div>
              
              <div id="shopList" className="w-[760px] h-[260px] flex mx-5 my-3">
                <div id ="shopList_lt" className="w-[50%] h-[80%] flex flex-col gap-6">
                  <div id="list1" className='flex justify-between w-[100%]'>
                    <div className='w-[40%]'>
                      <div id="shopImg" className="overflow-hidden bg-white border-[1px] border-gray-200 rounded-xl">
                        <img src={Shop} className="h-full w-full "></img>
                      </div>
                    </div>
                    <div className='w-[55%] flex flex-col justify-center'>
                      <div className='text-sm'>멋사대학 로고</div>
                      <div className='text-sm'>14기 시작기념 초특가</div>
                      <div className='flex gap-1 mt-1'>
                        <div className='text-sm text-red-600 font-black'>10%</div>
                        <div className='text-sm font-black'>14,400원</div>
                        <div className='line-through text-sm text-gray-300'>16,000원</div>
                      </div>
                      <div className='text-sm font-light mt-2 text-gray-600'>멋대 영남 스토어</div>
                    </div>
                  </div>
                  <div id="list2" className='flex justify-between w-[100%]'>
                    <div className='w-[40%]'>
                      <div id="shopImg" className="overflow-hidden bg-white border-[1px] border-gray-200 rounded-xl">
                        <img src={Shop} className="h-full w-full "></img>
                      </div>
                    </div>
                    <div className='w-[55%] flex flex-col justify-center'>
                      <div className='text-sm'>짱 좋은 멋대</div>
                      <div className='text-sm'>14기 시작기념 노마진</div>
                      <div className='flex gap-1 mt-1'>
                        <div className='text-sm text-red-600 font-black'>5%</div>
                        <div className='text-sm font-black'>11,400원</div>
                        <div className='line-through text-sm text-gray-300'>12,000원</div>
                      </div>
                      <div className='text-sm font-light mt-2 text-gray-600'>멋대 컴퍼니</div>
                    </div>
                  </div>
                </div>
                <div id ="shopList_rt" className="w-[50%] h-[80%] flex flex-col gap-6">
                  <div id="list3" className='flex justify-between'>
                    <div className='w-[40%]'>
                      <div id="shopImg" className="overflow-hidden bg-white border-[1px] border-gray-200 rounded-xl">
                        <img src={Shop} className="h-full w-full "></img>
                      </div>
                    </div>
                    <div className='w-[55%] flex flex-col justify-center'>
                      <div className='text-sm'>멋대 ISIX팀?</div>
                      <div className='text-sm'>너무 강력한 팀이에요.</div>
                      <div className='flex gap-1 mt-1'>
                        <div className='text-sm text-red-600 font-black'>1%</div>
                        <div className='text-sm font-black'>99,000원</div>
                        <div className='line-through text-sm text-gray-300'>100,000원</div>
                      </div>
                      <div className='text-sm font-light mt-2 text-gray-600'>영남 쇼핑몰</div>
                    </div>
                  </div>
                  <div id="list4" className='flex justify-between'>
                    <div className='w-[40%]'>
                      <div id="shopImg" className="overflow-hidden bg-white border-[1px] border-gray-200 rounded-xl">
                        <img src={Shop} className="h-full w-full "></img>
                      </div>
                    </div>
                    <div className='w-[55%] flex flex-col justify-center'>
                      <div className='text-sm'>멋대 아이디어톤</div>
                      <div className='text-sm'>다같이 화이팅!!</div>
                      <div className='flex gap-1 mt-1'>
                        <div className='text-sm text-red-600 font-black'>56%</div>
                        <div className='text-sm font-black'>7,920원</div>
                        <div className='line-through text-sm text-gray-300'>18,000원</div>
                      </div>
                      <div className='text-sm font-light mt-2 text-gray-600'>멋사 뷰티</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SepLine" className="w-[100%] border-[1px] border-gray-300"></div>
              <div id="paging" className='h-[80px] flex items-center justify-center gap-3'>
                <button className='w-9 h-9 font-black text-gray-500 border rounded-full flex items-center justify-center'>
                  &lt;
                </button>
                <div className='text-lg font-bold mt-2 text-blue-500'>쇼핑 투데이</div>
                <div className='text-lg font-bold mt-2 text-gray-600'>더보기</div>
                <div className='flex'>
                  <div className='text-lg font-bold mt-2 text-gray-600'>2/</div>
                  <div className='text-lg font-bold mt-2 text-gray-400'>14</div>
                </div>
                <button className='w-9 h-9 font-black text-gray-500 border rounded-full flex items-center justify-center'>
                  &gt;
                </button>
              </div>

            </div>
        </div>
        <div id="container_rt" className={`w-[320px] h-[700px] flex flex-col gap-3 ${bg_color_style}`}>
          <div id="UserInfo" className={`w-[320px] h-[170px] border-[1px] rounded-xl ${border_color} ${card_color_style}`}>
            <div id="my_View" className='mx-4 my-6'>
              <div className='flex items-center gap-1'>
                <div id="profile" className='relative w-[65px] h-[65px] flex items-center'>
                  <img src={Profile} className='w-full h-full rounded-full border border-gray-300 object-cover'></img>
                
                  <div className='absolute right-0 bottom-0 bg-white rounded-full'>
                    <img src={Setting} className='w-5 h-5 px-0.5 py-0.5 rounded-full border border-gray-300 object-cover'></img>
                  </div>
                </div>

                <div id="my_info">
                  <div className='flex flex-col gap-1'>
                    <div id="account_info" className='flex gap-2'>
                      <div className='font-black text-xs'>멋사대학님</div>
                      <div className='flex'>
                        <div className='text-xs text-gray-400'>네이버 ID</div>
                      </div>
                    </div>
                    <div className='font-light text-gray-400 text-xs'>LikeLion@naver.com</div>
                    <div className='flex'>
                      <div className={accountSelect_sty}>시작하기</div>
                      <div className={accountSep_sty}>|</div>
                      <div className={accountSelect_sty}>쪽지</div>
                      <div className={accountSep_sty}>|</div>
                      <div className={accountSelect_sty}>해피빈</div>
                    </div>
                  </div>
                </div>
                <div id="logout" className='flex items-start'>
                  <button className={`text-xs text-gray-400 rounded-2xl border px-1 py-1 mb-10 ${border_color}`}>로그아웃</button>
              </div>

                

                </div>
              </div>
              <div id="profileInfo" className={` border-[1px] rounded-b-xl ${bg2_color_style} ${border_color}`}>
                <div className='mx-2 my-4'>
                  <div className="flex">
                    <div className={myView_Select_sty}>메일</div>
                    <div className={myView_Sep_sty}>|</div>
                    <div className={myView_Select_sty}>카페</div>
                    <div className={myView_Sep_sty}>|</div>
                    <div className={myView_Select_sty}>블로그</div>
                    <div className={myView_Sep_sty}>|</div>
                    <div className={myView_Select_sty}>페이</div>
                  </div>
                </div>
              </div>
          </div>
          <div id="Ad_box1" className={`w-[320px] h-[250px] border-[1px] rounded-xl ${card_color_style} ${border_color}`}>
            <div className='mx-4 my-5 flex flex-col'>
              <div className='font-black text-sm'>2026 멋사대학 캠퍼스</div>

              <div id="Ad_box" className="flex items-center justify-between gap-4">
                <div className={`w-[80px] h-[60px] overflow_hidden border rounded-2xl mt-2 px-5 py-4 ${border_color} ${card_color_style}`}>
                  광고
                </div>

                <div className='flex flex-col border-t border-gray-200'>
                  <div className="pt-2 text-sm leading-6 text-gray-700">14기 시작기념 인증</div>
                  <div className="text-sm leading-6 text-gray-700">하면 특별 할인!!</div>
                </div>
                </div>
                
            </div>

            <div id="clickButton" className="mx-3 mt-5 h-9 bg-green-300 rounded-full flex items-center justify-between px-3">
              <div className='text-white font-black text-sm'>멋사대학</div>
              <div className='text-white font-black text-sm'>지금 구매하기</div>
            </div>
          </div>
          <div id="Ad_box2" className={`w-[320px] h-[250px] border rounded-xl ${border_color} ${card_color_style}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Container;