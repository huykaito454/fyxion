import React from "react";
import { useSelector } from "react-redux";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import { menu } from "./menu-data";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const menuNav = menu;
  return (
    <div className="select-none h-full fixed top-0 left-0 bg-black  flex flex-col items-center justify-start shadow">
      <HeaderNav menu={menuNav}></HeaderNav>
      <HeaderMenu user={user}></HeaderMenu>
    </div>
  );
};

export default Header;
