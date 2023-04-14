import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogOut } from "../../sagas/auth/auth-slice";

const HeaderMenu = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authLogOut());
    navigate("/");
  };
  const handleNavigateProfile = () => {
    navigate(`/profile/${user.id}`);
  };
  return (
    <div className="mt-auto flex items-center justify-between gap-2 p-1 cursor-pointer hover:scale-95">
      <Avatar
        alt="User settings"
        size="sm"
        img={user.avatar}
        rounded={true}
        onClick={() => {
          handleNavigateProfile();
        }}
      />
    </div>
  );
};

export default HeaderMenu;
