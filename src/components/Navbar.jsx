import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
import logo from "../assets/R.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex justify-center items-center">
        <img className="w-12 rounded-full" src={logo} alt="" />
        <h3 className="text-2xl text-secondary">Solution-HUB</h3>
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <button className="btn btn-primary font-bold text-[#1F2937] px-10 ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
