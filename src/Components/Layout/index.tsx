import React, { ReactNode } from "react";
import { Footer } from "./Footer.tsx";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
