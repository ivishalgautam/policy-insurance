import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-full">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
