import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col h-full overflow-hidden">
      {children}
    </main>
  );
};

export default Main;
