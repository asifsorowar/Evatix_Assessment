import React from "react";
import "../style/header.css";
import ButtonOutline from "./ButtonOutline";
import ButtonWhite from "./ButtonWhite";

const Header = () => {
  const basePath = process.env.PUBLIC_URL;

  return (
    <section className="header">
      <header className="container md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:px-9">
          <div className="m-auto text-center lg:text-left">
            <h4 className="text-white font-bold text-sm mb-2">
              BUSINESS WORKFLOW
            </h4>
            <h1 className="text-white text-3xl font-bold mb-3">
              Get the most efficient UI design for your business now!
            </h1>
            <h4 className="text-white text-xl  leading-5">
              Hire me to design a clean and modern UI for your product’s
              website.
            </h4>
            <div className="mt-7 flex flex-col mx-20  md:mt-12 md:flex-row md:mx-0">
              <ButtonWhite
                label="hire me"
                className="flex-1 mb-3 md:mr-5 md:mb-0 lg:flex-none"
              />
              <ButtonOutline
                label="portfolio"
                className="flex-1 lg:flex-none"
              />
            </div>
          </div>
          <img
            src={basePath + "/images/image_03.png"}
            alt=""
            className="object-contain text-center w-11/12 m-auto mt-10 lg:w-full lg:mt-0"
          />
        </div>
      </header>
      <img
        src={basePath + "/images/Shape_06.png"}
        alt=""
        className="object-contain text-center w-11/12 m-auto mt-10 lg:w-full lg:mt-0 w-full block md:hidden lg:block"
      />
      <img
        src={basePath + "/images/header_tab.png"}
        alt=""
        className="object-contain text-center w-11/12 m-auto mt-10 lg:w-full lg:mt-0  w-full hidden md:block lg:hidden"
      />
    </section>
  );
};

export default Header;
