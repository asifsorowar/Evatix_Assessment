import React, { useState } from "react";
import "../style/navbar.css";
import ButtonWhite from "./ButtonWhite";
import ButtonGradient from "./ButtonGradient";

interface Scrolled {
  scrolled: boolean;
}

const NavBar = ({ scrolled }: Scrolled) => {
  const basePath = process.env.PUBLIC_URL;
  const [isMenu, setMenu] = useState(false);

  const handleToggle = (e: any) => {
    e.preventDefault();
    isMenu ? setMenu(false) : setMenu(true);
  };

  return (
    <>
      <nav
        id="header"
        className="flex px-6 py-3 justify-between pd items-center lg:justify-around"
      >
        {!scrolled && (
          <a className="logo cursor-pointer">
            <img src={basePath + "/images/logo_white.png"} alt="" />
          </a>
        )}
        {scrolled && (
          <a className="logo cursor-pointer">
            <img src={basePath + "/images/logo_03.png"} alt="" />
          </a>
        )}
        <ul className="hidden md:inline-flex lg:inline-flex">
          <li>
            <a className="cursor-pointer">Home</a>
          </li>
          <li>
            <a className="cursor-pointer">Portfolio</a>
          </li>
        </ul>
        {!scrolled && (
          <ButtonWhite label="hire me" className="hidden md:block lg:block " />
        )}
        {scrolled && (
          <ButtonGradient
            label="hire me"
            className="hidden md:block lg:block"
          />
        )}
        {scrolled && (
          <a className="block md:hidden lg:hidden" onClick={handleToggle}>
            <img src={basePath + "/images/toggle.png"} alt="" />
          </a>
        )}
        {!scrolled && (
          <a className="block md:hidden lg:hidden" onClick={handleToggle}>
            <img src={basePath + "/images/toggle_white.png"} alt="" />
          </a>
        )}

        {isMenu && (
          <div
            className="mobile-menu bg-white block md:hidden lg:hidden"
            id="mobile-nav"
          >
            <div className="flex justify-between items-center border-b-2 px-6 py-3">
              <a className="logo">
                <img src={basePath + "/images/logo_03.png"} alt="" />
              </a>
              <a onClick={handleToggle}>
                <img src={basePath + "/images/toggle.png"} alt="" />
              </a>
            </div>
            <div className="mobile-menu-item flex flex-col justify-between px-16 pb-16">
              <ul className="flex flex-col p-10">
                <li>
                  <a className="cursor-pointer">Home</a>
                </li>
                <li>
                  <a className="cursor-pointer">Portfolio</a>
                </li>
              </ul>
              <ButtonGradient label="hire me" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
