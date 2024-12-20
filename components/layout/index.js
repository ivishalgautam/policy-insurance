import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../footer";
import { ScrollArea } from "../ui/scroll-area";

export default function Layout({ children }) {
  return (
    <ScrollArea className="h-screen">
      <Navbar />
      {children}
      <Footer />
    </ScrollArea>
  );
}
