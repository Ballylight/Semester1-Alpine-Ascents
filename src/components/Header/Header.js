import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../images/Loogo.jpg";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [visitorCount, setVisitorCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getVisitorCount = () => {
    return parseInt(localStorage.getItem("visitorCount") || "0", 10);
  };

  const incrementVisitorCount = () => {
    const sessionVisited = sessionStorage.getItem("visited");
    if (!sessionVisited) {
      const currentCount = getVisitorCount();
      const newCount = currentCount + 1;
      localStorage.setItem("visitorCount", newCount);
      setVisitorCount(newCount);
      sessionStorage.setItem("visited", "true");
    } else {
      setVisitorCount(getVisitorCount());
    }
  };

  useEffect(() => {
    incrementVisitorCount();
    const interval = setInterval(() => {
      setVisitorCount(getVisitorCount());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Alpine Ascents Logo" className="logo" />
        <span className="site-title">Alpine Ascents</span>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        {["Home", "History", "Sheltering", "Climbing Disciplines"].map((menu) => (
          <span
            key={menu}
            className={`nav-item ${activeMenu === menu ? "active" : ""}`}
            onClick={() => {
              setActiveMenu(menu);
              setIsMenuOpen(false);
            }}
          >
            {menu}
          </span>
        ))}
      </nav>

      <div className="visitor-count">Visitor's Count: {visitorCount}</div>
    </header>
  );
};

export default Header;
