import React from 'react'

import { FiEdit } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

import dashboardimages1 from "../images/ganadi1.jpeg"
import dashboardimages2 from "../images/ganadi2.jpeg"

import { useLanguage } from "../context/LanguageContext";
// 1. 소프트웨어공학 Software Engineering
// 2. 캡스톤디자인 Capstone Design
// 3. 자료구조 Data Structures
// 4. 알고리즘 Algorithms
// 5. 데이터베이스 Database Systems
// 6. 운영체제 Operating Systems
// 7. 컴퓨터네트워크 Computer Networks
// 8. 웹프로그래밍 Web Programming  

const dashboardStyle = {
  Software_Engineering: {
    bgColor: "bg-yellow-300",
    textColor: "text-yellow-600",
  },
  Capstone_Design: {
    bgColor: "bg-red-300",
    textColor: "text-red-600",
  },
  Data_Structures: {
    bgColor: "bg-green-300",
    textColor: "text-green-600",
  },
  Algorithms: {
    bgColor: "bg-blue-300",
    textColor: "text-blue-600",
  },
  Database_Systems: {
    bgColor: "bg-orange-300",
    textColor: "text-orange-700",
  },
  Operating_Systems: {
    bgColor: "bg-purple-300",
    textColor: "text-purple-700",
  },
  Computer_Networks: {
    bgColor: "bg-gray-300",
    textColor: "text-gray-700",
  },
  Web_Programming: {
    bgColor: "bg-pink-300",
    textColor: "text-pink-700",
  },
  default: {
    bgColor: "bg-black",
    textColor: "text-black-700",
  },
};

const dashboardList = [
  {
    id: 1,
    thumbnail: dashboardimages1,
    title: {
      ko: "프론트엔드 14기 (2026-1)",
      en: "Frontend 14th (2026-1)",
    },
    semester: {
      ko: "2026년 1학기",
      en: "Spring 2026",
    },
    category: "default",
    unread: true,
  },
  {
    id: 2,
    title: {
      ko: "소프트웨어공학 (1022-22)",
      en: "Software Engineering (1022-22)",
    },
    semester: {
      ko: "2026년 2학기",
      en: "Fall 2026",
    },
    category: "Software_Engineering",
    unread: true,
  },
  {
    id: 3,
    title: {
      ko: "캡스톤디자인 (1023-03)",
      en: "Capstone Design (1023-03)",
    },
    semester: {
      ko: "2027년",
      en: "2027",
    },
    category: "Capstone_Design",
    unread: false,
  },
  {
    id: 4,
    title: {
      ko: "알고리즘 (1324-1)",
      en: "Algorithms (1324-1)",
    },
    semester: {
      ko: "2026년 1학기",
      en: "Spring 2026",
    },
    category: "Algorithms",
    unread: true,
  },
  {
    id: 5,
    title: {
      ko: "데이터베이스 (1425-1)",
      en: "Database Systems (1425-1)",
    },
    semester: {
      ko: "2027년 1학기",
      en: "Spring 2027",
    },
    category: "Database_Systems",
    unread: true,
  },
  {
    id: 6,
    title: {
      ko: "운영체제 (1526-3)",
      en: "Operating Systems (1526-3)",
    },
    semester: {
      ko: "2026년 1학기",
      en: "Spring 2026",
    },
    category: "Operating_Systems",
    unread: false,
  },
  {
    id: 7,
    thumbnail: dashboardimages2,
    title: {
      ko: "멋쟁이사자처럼 (2026-2)",
      en: "LIKELION (2026-2)",
    },
    semester: {
      ko: "2026년 2학기",
      en: "Fall 2026",
    },
    category: "default",
    unread: true,
  },
  {
    id: 8,
    title: {
      ko: "컴퓨터 네트워크 (1627-9)",
      en: "Computer Networks (1627-9)",
    },
    semester: {
      ko: "2026년 1학기",
      en: "Spring 2026",
    },
    category: "Computer_Networks",
    unread: false,
  },
  {
    id: 9,
    title: {
      ko: "웹 프로그래밍 (1728-0)",
      en: "Web Programming (1728-0)",
    },
    semester: {
      ko: "2027년 1학기",
      en: "Spring 2027",
    },
    category: "Web_Programming",
    unread: true,
  },
  {
    id: 10,
    title: {
      ko: "자료구조 (1829-2)",
      en: "Data Structures (1829-2)",
    },
    semester: {
      ko: "2025년 2학기",
      en: "Fall 2025",
    },
    category: "Data_Structures",
    unread: true,
  },
];
const Dashboard = () => {
  const { lang } = useLanguage();

  const styles = {
    container: "w-full",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7",
    card: "bg-white rounded-md shadow-md border border-gray-200 overflow-hidden flex flex-col transition-all hover:shadow-xl cursor-pointer",
    thumbnailWrapper: "relative h-32 overflow-hidden",
    thumbnail: "w-full h-full object-cover",
    emptyThumbnail: "w-full h-full",
    moreButton: "absolute top-2 right-2 p-1 text-white hover:bg-black/20 rounded",
    content: "p-4 flex flex-col gap-2 group",
    title: "font-bold text-[13px] truncate cursor-pointer group-hover:underline",
    subtitle: "text-gray-600 text-md truncate group-hover:underline",
    semester: "text-gray-400 text-[10px] group-hover:underline",
    iconBar: "flex items-center space-x-10",
    noticeWrapper: "relative cursor-pointer group",
    noticeIcon: "w-5 h-5 opacity-70 group-hover:opacity-100 hover:text-blue-500",
    unreadBadge:
      "absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center",
    writeIcon: "w-5 h-8 opacity-70 hover:opacity-100 hover:text-blue-500",
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {dashboardList.map((item) => {
          const style =
            dashboardStyle[item.category] ?? dashboardStyle.default;

          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                {item.thumbnail ? (
                  <img
                    className={styles.thumbnail}
                    src={item.thumbnail}
                    alt={item.title[lang]}
                  />
                ) : (
                  <div
                    className={`${styles.emptyThumbnail} ${style.bgColor}`}
                  />
                )}

                <button aria-label="더보기" className={styles.moreButton}>
                  <span className="text-2xl leading-none">⋮</span>
                </button>
              </div>

              {/* 내용 */}
              <div className={styles.content}>
                <div>
                  <div className={`${styles.title} ${style.textColor}`}>
                    {item.title[lang]}
                  </div>

                  <div className={styles.subtitle}>{item.title[lang]}</div>

                  <div className={styles.semester}>{item.semester[lang] }</div>
                </div>

                <div className={styles.iconBar}>
                  <div className={styles.noticeWrapper}>
                    <FiBell className={styles.noticeIcon} />

                    {item.unread && (
                      <div className={styles.unreadBadge}>1</div>
                    )}
                  </div>

                  <button aria-label="글쓰기">
                    <FiEdit className={styles.writeIcon} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;