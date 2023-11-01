import React from "react";

const Tab = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "border-b-4 border-purple-500 text-white"
    : "text-[#ADB7BE] hover:text-white";
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold ${buttonClasses}`}
    >
      {" "}
      {children}
    </button>
  );
};

export default Tab;
