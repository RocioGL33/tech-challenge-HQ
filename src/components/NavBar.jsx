import React from "react";
import Logo from "../img/logo.png";

const NavBar = () => {
  return (
    <div className="App">
      <nav>
        <div
          className="flex items-center justify-between px-6"
          style={{ borderBottom: "1px solid #F0F0F0" }}
        >
          <img src={Logo} alt="logo" style={{ height: "44px" }} />
          <div className="flex items-center py-4">
            <ul className="pr-9">
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                Features
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                ·
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                FAQ
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                ·
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                Pricing
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                ·
              </li>
              <li className="inline px-3 font-sans text-base font-semibold text-darkGrey">
                Testimonials
              </li>
            </ul>
            <button
              className="py-4 px-6 bg-white rounded-xl font-sans text-base font-semibold cursor-pointer"
              style={{ border: "1px solid #F0F0F0" }}
            >
              Buy Template
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
