import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="w- bg-slate-700 p-3 w-5/12 flex justify-around items-center my-4 rounded-lg">
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-red-600" : "text-white"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-red-600" : "text-white"}`
        }
        to={"/list"}
      >
        List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-red-600" : "text-white"}`
        }
        to={"/form"}
      >
        Form
      </NavLink>
    </div>
  );
}

export default Navbar;
