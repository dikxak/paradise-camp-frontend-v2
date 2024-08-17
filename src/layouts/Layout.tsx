import React from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type NavbarProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: NavbarProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
