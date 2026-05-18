import React from "react";
import logo from "../images/YU_LikeLion.png";
import { FaHome } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdOutlineMenuBook, MdQuestionAnswer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";

const List = () => {
  const [activeItem, setActiveItem] = React.useState(1);

  const navItems = [
    FaHome,
    TfiDashboard,
    MdOutlineMenuBook,
    SlCalender,
    FaCircleQuestion,
    MdQuestionAnswer,
  ];

  return (
    <aside className="w-16 bg-[#003366] max-h-screen flex flex-col items-center py-4 text-white">
      
      <div className="mb-8">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer">
          <img
            src={logo}
            alt="LOGO"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex-1 text-[20px] w-16">
        {navItems.map((Icon, index) => (
          <div
            key={index}

            className={`flex items-center justify-center py-3 w-full cursor-pointer text-2xl ${
              activeItem === index
                ? "bg-white text-[#003366]"
                : "hover:bg-[#004080]"
            }`}
          >
            <Icon size={28} />
          </div>
        ))}
      </div>

      {/* exit */}
      <div className="flex justify-center mt-auto w-16 p-2 hover:bg-[#004080] cursor-pointer">
        <RxExit size={24} />
      </div>
    </aside>
  );
};

export default List;