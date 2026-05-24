import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";
import adImage from "./images/ad.png";

// 1. SubNavbar 컴포넌트 대응
const SubNavbar = () => {
  const { theme } = useContext(ThemeContext); // 테마 가져오기

  return (
    <div
      className={`flex flex-row justify-between items-center p-1 border-b ${
        theme === "light"
          ? "border-gray-200 text-gray-700"
          : "border-zinc-700 text-zinc-300"
      }`}
    >
      <div className="ml-20 mr-20 flex flex-row gap-5">
        <button className="text-green-600 font-bold underline">
          블로그 홈
        </button>
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          주제별 보기
        </button>
      </div>
      <div className="ml-20 mr-20 flex flex-row gap-5">
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          이달의 블로그
        </button>
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          공식블로그
        </button>
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          챌린지프로그램
        </button>
      </div>
      <div className="ml-20 mr-20 flex flex-row gap-5">
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          블로그 마켓 가입
        </button>
        <button
          className={
            theme === "light" ? "hover:text-black" : "hover:text-white"
          }
        >
          블로그팀 공식 블로그
        </button>
      </div>
    </div>
  );
};

const list = [1, 2, 3, 4, 5];

// 2. HotTopicSection 컴포넌트 대응
const HotTopicSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row justify-between items-center ml-20 mr-20 my-4">
      <div>
        <button className="text-red-500 font-bold mr-1">핫토픽</button>
        <span className={theme === "light" ? "text-gray-400" : "text-zinc-500"}>
          {" "}
          &lt;{" "}
        </span>
        <button className="font-medium"> 주말 농장</button>
      </div>

      {/* 회색 버튼들 다크모드 색상 변경 */}
      <div className="flex">
        {list.map((item) => (
          <button
            key={item}
            className={`m-1 inline-block w-5 h-5 text-center text-xs rounded transition-colors ${
              theme === "light"
                ? "bg-gray-200 text-gray-700"
                : "bg-zinc-700 text-zinc-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        <button
          className={`inline-block w-5 h-5 text-center text-xs rounded ml-20 mr-20 ${
            theme === "light"
              ? "bg-gray-200 text-gray-700"
              : "bg-zinc-700 text-zinc-300"
          }`}
        >
          1
        </button>
      </div>
    </div>
  );
};

const posts = [
  {
    id: 1,
    title: "농장에 심을 모종 쇼핑",
    img: "https://via.placeholder.com/400x300",
    profileImg: "https://via.placeholder.com/50",
    userName: "도농로그",
    description: "안녕하세요! 주말농장 기록입니다.",
  },
  {
    id: 2,
    title: "직접 심고 수확하는 재미~",
    img: "https://via.placeholder.com/400x300",
    profileImg: "https://via.placeholder.com/50",
    userName: "성주맘",
    description:
      "주말농장 생강심는 시기 수확시기 생강 재배법 종자심기 심는방법...",
  },
  {
    id: 3,
    title: "감자 웃거름 주고 잘 자라요~",
    img: "https://via.placeholder.com/400x300",
    profileImg: "https://via.placeholder.com/50",
    userName: "현이네파파",
    description: "4/14 금요일 엄니와 텃밭에 왔다 텃밭 적양파...",
  },
];

// 3. PostCard 컴포넌트 대응
const PostCard = ({ title, img, profileImg, userName, description }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`relative group overflow-hidden rounded-lg border transition-colors ${
        theme === "light" ? "border-gray-200" : "border-zinc-700"
      }`}
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white text-center">
        <img
          src={profileImg}
          alt={userName}
          className="w-12 h-12 rounded-full mb-2"
        />
        <h4 className="font-bold underline">{userName}</h4>
        <p className="text-xs mt-2">{description}</p>
      </div>

      <div
        className={`p-3 text-center text-sm font-medium transition-colors ${
          theme === "light"
            ? "bg-gray-50 text-gray-800"
            : "bg-zinc-800 text-zinc-200"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <SubNavbar />
      <HotTopicSection />
      <div className="grid grid-cols-4 gap-4 mr-20 ml-20 pb-10">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              img={post.img}
              profileImg={post.profileImg}
              userName={post.userName}
              description={post.description}
            />
          ))}
        </div>
        <div className="col-span-1">
          <img
            src={adImage}
            alt="광고 배너"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
