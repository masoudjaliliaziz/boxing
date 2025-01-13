import React from "react";
import { NavLink } from "react-router";

function Navbar({ logo = false }) {
  return (
    <div className="w-4/12 bg-slate-800 h-10 pl-8 p-6  flex justify-around items-center my-4 rounded-lg z-20 relative">
      {logo && (
        <img
          className="absolute w-20 left-0 top-0"
          src="./src/assets/images/boxing-glove.png"
          alt=""
        />
      )}
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#5dbedf]" : "text-white"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#5dbedf]" : "text-white"}`
        }
        to={"/list"}
      >
        List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-[#5dbedf]" : "text-white"}`
        }
        to={"/form"}
      >
        Form
      </NavLink>
    </div>
  );
}

export default Navbar;
