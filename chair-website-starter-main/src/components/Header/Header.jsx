import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  // header scroll background
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const hanleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", hanleScroll);
    return () => {
      window.removeEventListener("scroll", hanleScroll);
    };
  }, []);

  // menu open close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <div className="nav container">
          {/* logo */}
          <a href="#hero" className="logo">
            LeChair
          </a>
          {/* nav links */}
          <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
            <a href="#" className="nav-link">
              Furniture
            </a>
            <a href="#" className="nav-link">
              Projects
            </a>
            <a href="#" className="nav-link">
              Products
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="register-btn btn">
              Register
            </a>
          </div>
          {/* menu icon */}
          <div
            className={`menu-icon ${isMenuOpen ? "move" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
