import React from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header-content">
            <h1>
              <MdOutlineMapsHomeWork />
              Real <span className="colorize">State</span>{" "}
            </h1>
            <p>Get you dream house from here </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
