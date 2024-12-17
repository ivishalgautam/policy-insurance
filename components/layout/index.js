import React from "react";
import Navbar from "../../components/navbar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <div className="absolute w-full top-0 left-0">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
