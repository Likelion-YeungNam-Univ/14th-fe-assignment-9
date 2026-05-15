import React from "react";
import "./Sidebar.css";

import homeIcon from "./image/home.png";
import mypageIcon from "./image/mypage.png";
import shortsIcon from "./image/shorts.png";
import subscribeIcon from "./image/subscribe.png";

function Sidebar() {
  const menuItems = [
    { icon: homeIcon, label: "홈" },
    { icon: shortsIcon, label: "Shorts" },
    { icon: subscribeIcon, label: "구독" },
    { icon: mypageIcon, label: "채널" },
  ];

  return (
    <aside className="sidebar-container">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          <img src={item.icon} alt={item.label} className="sidebar-icon" />
          <span className="sidebar-label">{item.label}</span>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
