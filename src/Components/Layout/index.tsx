import React, { ReactNode } from "react";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
