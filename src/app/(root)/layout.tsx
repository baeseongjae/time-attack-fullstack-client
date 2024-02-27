import React from "react";
import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
