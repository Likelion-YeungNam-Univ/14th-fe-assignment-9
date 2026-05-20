import React from "react";
import logo from "../images/YU_LikeLion.png";

import { FaHome } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

import { MdOutlineMenuBook, MdQuestionAnswer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";

const List = () => {
  const styles = {
  aside:"w-16 bg-[#003366] min-h-screen flex flex-col items-center py-4 text-white",
  logoWrapper: "mb-8",
  logoCircle: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer",
  logo: "w-full h-full object-contain",
  navContainer: "flex-1 text-[20px] w-16",
  navItem:"flex items-center justify-center py-3 w-full cursor-pointer text-2xl",
  navItemActive: "bg-white text-[#003366]",
  navItemHover: "hover:bg-[#004080]",
  exitButton:"flex justify-center mt-auto w-16 p-2 hover:bg-[#004080] cursor-pointer",
};

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
    <aside className={styles.aside}>
      
      <div className={styles.logoWrapper}>
        <div className={styles.logoCircle}>
          <img
            src={logo}
            alt="LOGO"
            className={styles.logo}
          />
        </div>
      </div>

      <div className={styles.navContainer}>
        {navItems.map((Icon, index) => (
          <div
            key={index}

            className={`
              ${styles.navItem}
              ${
                activeItem === index
                ? styles.navItemActive
                : styles.navItemHover
              }`}
          >
            <Icon size={28} />
          </div>
        ))}
      </div>

      <div className={styles.exitButton}>
        <RxExit size={24} />
      </div>
    </aside>
  );
};

export default List;