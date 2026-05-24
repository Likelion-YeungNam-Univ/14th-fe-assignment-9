import { useContext } from "react";
import Theme from "./context/Theme";
import shorts from "./assets/shorts.png";
import home from "./assets/home.png";
import subscribe from "./assets/subscribe.png";
import library from "./assets/library.png";

const Barlist = [
    {id: 1, label: "홈", icon: home},
    {id: 2, label: "Shorts", icon: shorts},
    {id: 3, label: "구독", icon: subscribe},
    {id: 4, label: "내 페이지", icon: library},
]

const Bar = () => {
  const { isDark } = useContext(Theme);
  return (
    <div className={`w-16 h-screen ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#ffffff]'} flex flex-col items-center pt-4 gap-1 fixed left-0 top-[112px] transition-colors duration-300`}>
      {Barlist.map((menu) => (
        <div
          key={menu.id}
          className={`flex flex-col items-center gap-1 w-14 py-3 rounded-xl cursor-pointer ${isDark ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'} transition-colors`}
        >
          <img src={menu.icon} alt={menu.label} className={`w-5 h-5 ${isDark ? 'invert' : ''}`} />
          <span className={`text-[10px] font-bold ${isDark ? 'text-white' : 'text-black'}`}>{menu.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Bar;