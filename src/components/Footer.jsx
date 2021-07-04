import React from "react";
import "../style/footer.css";

const Footer = () => {
  const basePath = process.env.PUBLIC_URL;

  return (
    <>
      <footer>
        <img
          src={basePath + "/images/footer_mobile.png"}
          alt=""
          className="footer_image object-cover block sm:block md:hidden lg:hidden"
        />
        <img
          src={basePath + "/images/footer_tab.png"}
          alt=""
          className="footer_image object-cover hidden sm:hidden md:block lg:hidden"
        />

        <img
          src={basePath + "/images/component_1.png"}
          alt=""
          className="footer_image object-cover hidden sm:hidden md:hidden lg:block"
        />

        <div className="text-center footer-contain w-7/12 lg:w-6/12">
          <div>
            <h1 className="footer-header border-b-2 inline-block pb-4 font-bold text-white text-4xl md:font-2xl md:pb-1">
              Start a project with me
            </h1>
            <p className="mt-4 text-white text-xl leading-5">
              let’s discuss our ideas for presenting your business to the world
              in an attractive, efficient and effective way.
            </p>
          </div>
          <div className="mt-10 flex">
            <a className="mx-auto flex-1 lg:mx-auto md:mx-12 lg:flex-none shadow-lg bg-white hover:bg-gray-100 text-black font-bold py-3 px-10 uppercase">
              hire me
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
