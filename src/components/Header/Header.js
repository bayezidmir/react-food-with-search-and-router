import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link className="fs-3 text-decoration-none text-dark" to="/">
        Cravings
      </Link>

      <div className="menu d-flex gap-3 flex-md-row flex-column">
        <CustomLink to="/" className="text-decoration-none">
          {" "}
          Home
        </CustomLink>
        <CustomLink to="/food" className="text-decoration-none">
          Food
        </CustomLink>
        <CustomLink to="/contact-us" className="text-decoration-none">
          Contact us
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
