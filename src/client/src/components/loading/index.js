import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] relative bg-[#141414] bg-opacity-20">
      <div className="lds-ellipsis absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
