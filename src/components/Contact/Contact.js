import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Contact = () => {
  return (
    <div className="p-5">
      <h5>Please Pick Your convenient location to Visit Us</h5>
      <CustomLink
        to="/contact-us/dhakaAddress"
        className="me-5 text-decoration-none"
      >
        Dhaka
      </CustomLink>
      <CustomLink
        to="/contact-us/comillaAddress "
        className="text-decoration-none"
      >
        Comilla
      </CustomLink>
      <Outlet></Outlet>
    </div>
  );
};

export default Contact;
