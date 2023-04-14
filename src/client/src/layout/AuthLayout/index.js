import React from "react";
import { Outlet } from "react-router-dom";
import imageAuth from "../../assets/images/Ellipse.png";
import imageLogo from "../../assets/images/logo/logo-primary.png";

const AuthenticationLayout = () => {
  return (
    <div className="w-full h-[100vh] relative overflow-hidden select-non">
      {/* <img
        src={imageAuth}
        alt="bg"
        className="pointer-events-none absolute bottom-[-100px] left-0 right-0 isolate"
      ></img> */}
      <video
        src="https://cdn-production.tunecore.com/videos/background_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthenticationLayout;
