import React from 'react'
import dashboardimages1 from "/Users/it/Desktop/14th-fe-assignment-5/images/ganadi1.jpeg"
import dashboardimages2 from "/Users/it/Desktop/14th-fe-assignment-5/images/ganadi2.jpeg"
import notice from "/Users/it/Desktop/14th-fe-assignment-5/images/notice.png"
import write from "/Users/it/Desktop/14th-fe-assignment-5/images/ganadi3.jpeg"
import question from "/Users/it/Desktop/14th-fe-assignment-5/images/notice.png"


const DashboradList = [
    { id: 1, thumbnail: dashboardimages2, icon: write,profile: notice, title: "Fe-14th (2026-1)", semester: "2026년 1학기", textColor: "text-blue-600", unread: true },
    { id: 2, color: "bg-yellow-300", icon: write, profile: notice, title: "0.사전 준비 (1039-2)", semester: "2026년 1학기", textColor: "text-yellow-600", unread: false },
    { id: 3, color: "bg-red-300", icon: write, profile: notice, title: "1. HTML & CSS (1040-1)", semester: "2026년 1학기", textColor: "text-red-600", unread: true },
    { id: 4, color: "bg-blue-300", icon: write, profile: notice, title: "2. JavaScript (1041-1)", semester: "2026년 1학기", textColor: "text-blue-600", unread: false },
    { id: 5, color: "bg-green-300", icon: write, profile: notice, title: "3. React (1042-1)", semester: "2026년 1학기", textColor: "text-green-600", unread: false },
    { id: 6, color: "bg-orange-300", icon: write, profile: notice, title: "4. Node.js (1043-1)", semester: "2026년 1학기", textColor: "text-orange-600", unread: true },
    { id: 7, thumbnail: dashboardimages1, icon: write, profile: notice, title: "2026년_Likelion (2026-1)", semester: "2026년 1학기", textColor: "text-blue-900", unread: false },
    { id: 8, color: "bg-purple-300", icon: write, profile: notice, title: "5. Routing (1044-1)", semester: "2026년 1학기", textColor: "text-purple-600", unread: true },
    { id: 9, color: "bg-gray-300", icon: write, profile: notice, title: "6. useState", semester: "2026년 1학기", textColor: "text-gray-600", unread: false },
    { id: 10, color: "bg-pink-300", icon: write, profile: notice, title: "7. useEffect", semester: "2026년 1학기", textColor: "text-pink-600", unread: false },
];

const Dashboard = () => {
    return (
        <div className="w-[1150px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {DashboradList.map(form => (
                    <div key={form.id} className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden flex flex-col shadow transition hover:shadow-xl cursor-pointer">
                        {/* 1. 메인 이미지 & 2. : 더보기 버튼 */}
                        <div className="relative h-32 overflow-hidden">
                            {form.thumbnail ? (
                                <img className="w-full h-full object-cover" src={form.thumbnail} alt="thumbnail" />
                            ) : (
                                <div className={`w-full h-full ${form.color}`}></div>
                            )}
                            <button className="absolute top-2 right-2 p-1 text-white hover:bg-black/20 rounded">
                                <span className="text-2xl leading-none">⋮</span>
                            </button>
                        </div>

                        {/* 정보 및 버튼 영역 */}
                        <div className="p-4 flex flex-col gap-2 group">
                            <div>
                                {/* 3. 제목 / 4. 부제목 / 5. 해당 학기 */}
                                <div className={`font-bold text-[13px] truncate cursor-pointer ${form.textColor} group-hover:underline`}>
                                    {form.title}
                                </div>
                                <div className="text-gray-600 text-md truncate group-hover:underline ">{form.title}</div>
                                <div className="text-gray-400 text-[10px] group-hover:underline">{form.semester}</div>
                            </div>

                            {/* 하단 아이콘 바 (6~7번 기능) */}
                            <div className="flex items-center space-x-10">
                                {/* 6. 공지 & 6-1. 안 읽은 공지 표시 */}
                                <div className="relative cursor-pointer group">
                                    <img className="w-10 h-8 opacity-70 group-hover:opacity-100" src={form.profile} alt="notice" />
                                    {form.unread && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-800 rounded-full text-white text-xs flex items-center justify-center">1</div>
                                    )}
                                </div>
                                    {/* 7. 글쓰기 기능 */ }
                                <button>
                                    <img className="w-9 h-8 opacity-70 hover:opacity-100" src={form.icon} alt="write" />
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;