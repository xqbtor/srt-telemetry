import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="mx-auto max-w-480">{children}</main>;
};

export default Main;
