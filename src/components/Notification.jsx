import React from 'react'


const Notification = () => {
  return (
    <aside className="w-70 p-6 bg-white flex flex-col space-y-8 overflow-y-auto">

      <section>
        <div className="flex justify-between items-center border-b pb-1 mb-4">
          <h2 className="font-bold text-gray-800">할 일</h2>
        </div>
        
        <div className="space-y-4">
          <div className="relative group">
            <button className="absolute -right-0 top-0 text-gray-400 hover:bg-slate-200">✕</button>
            <div className="flex items-start space-x-2">
              <div className="-mt-2 text-gray-400">📢</div>
              <div>
                <p className="text-xs text-blue-500 font-medium leading-tight">오늘 수업은 휴강입니다.</p>
                <p className="text-[10px] text-gray-400 mt-1">4. Node.js</p>
                <p className="text-[10px] text-gray-400">5월 8일 19:00 | <span className="cursor-pointer underline">상세보기</span></p>
              </div>
            </div>
          </div>
          <button className="w-full text-center text-blue-500 text-xs pt-2">Show All</button>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-gray-800 border-b pb-1 mb-4">최근 피드백</h2>
        <div className="flex items-start space-x-2 p-2 rounded">
          <span className="text-green-500 text-xs">✓</span>
          <div>
            <h4 className="text-sm font-bold text-blue-500">2차 퀴즈</h4>
            <p className="text-[10px] mt-1 text-gray-400">0.사전 준비</p>
            <p className="text-xs mt-1 text-gray-400">28 / 30</p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Notification;