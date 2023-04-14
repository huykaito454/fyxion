import React from "react";
import { NavLink } from "react-router-dom";
const HeaderNav = ({ menu }) => {
  return (
    <div className="flex items-center flex-col justify-center gap-2">
      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.link}
          className={({ isActive }) =>
            isActive
              ? "text-primary py-1 f-center px-3"
              : " text-slate-500 py-1 px-3 hover:bg-grayCardHover f-center rounded-md  transition-all"
          }
        >
          {({ isActive }) =>
            isActive ? (
              <span className="material-symbols-rounded text-3xl cursor-pointer">
                {item.icon}
              </span>
            ) : (
              <span className="material-symbols-outlined text-3xl cursor-pointer">
                {item.icon}
              </span>
            )
          }
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderNav;
