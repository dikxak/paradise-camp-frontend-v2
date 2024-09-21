import React from "react";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type NavbarProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: NavbarProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
