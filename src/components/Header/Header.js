import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link className="fs-3 text-decoration-none text-dark" to="/">
        Cravings
      </Link>

      <div className="menu d-flex gap-3 flex-md-row flex-column">
        <Link to="/">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/contact-us">Contact us</Link>
      </div>
    </div>
  );
};

export default Header;
