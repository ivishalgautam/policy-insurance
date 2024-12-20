import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../footer";
import { ScrollArea } from "../ui/scroll-area";

export default function Layout({ children }) {
  return (
    <ScrollArea className="h-screen">
      <div className="relative">
        <div className="absolute left-0 top-0 w-full">
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </ScrollArea>
  );
}
