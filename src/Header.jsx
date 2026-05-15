import React, { useState } from "react";
import "./Header.css";
import LogoIcon from "./image/subscribe.png";
import { useTheme } from "./ThemeContext";

function Header() {
  const { isLight, setIsLight, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLightMode = () => {
    setIsLight(true);
    setIsDropdownOpen(false);
  };

  const selectDarkMode = () => {
    setIsLight(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-start">
        <div className="menu-wrapper">
          <button className="icon-btn menu-btn" onClick={toggleDropdown}>
            ☰
          </button>
          {isDropdownOpen && (
            <div className="theme-dropdown">
              <div className="dropdown-item" onClick={selectLightMode}>
                ☀️ 라이트모드 {isLight && "✓"}
              </div>
              <div className="dropdown-item" onClick={selectDarkMode}>
                🌙 다크모드 {!isLight && "✓"}
              </div>
            </div>
          )}
        </div>

        <div className="logo">
          <img src={LogoIcon} alt="Logo" className="logo-icon" />
          <span className="logo-text">Premium</span>
          <span className="country-code">KR</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-box">
          <input type="text" placeholder="검색" className="search-input" />
        </div>
      </div>

      <div className="header-end">
        <button className="icon-btn mobile-search-btn">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="white"
              d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
            ></path>
          </svg>
        </button>
        <button className="create-btn">
          <span>+</span>만들기
        </button>
        <button className="icon-btn bell-btn">🔔</button>
        <div className="profile-avatar">보성</div>
      </div>
    </div>
  );
}

export default Header;
