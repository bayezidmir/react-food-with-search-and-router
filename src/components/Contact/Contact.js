import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="p-5">
      <h5>Please Pick Your convenient location to Visit Us</h5>
      <Link to="/contact-us/dhakaAddress" className="me-5">
        Dhaka
      </Link>
      <Link to="/contact-us/comillaAddress">Comilla</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Contact;
