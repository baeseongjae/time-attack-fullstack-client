import React from "react";
import Header from "./_components/Header/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
