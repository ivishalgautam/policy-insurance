"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HovermeButton } from "./ui/hover-me-button";
import Logo from "./logo";
import NavigationTabs from "./navigation-tabs";

export const navList = [
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Why Choose Us",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="bg-primary-300 py-6">
      <div className="container">
        <div className="flex items-center justify-between gap-4 md:gap-12">
          <Logo />
          <nav className="hidden items-center justify-start text-sm lg:flex lg:gap-8 lg:text-base">
            <NavigationTabs />
          </nav>
          <div className="ml-auto hidden sm:block">
            <CTA />
          </div>
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={"text-start"}>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
          <div className="!mt-8 space-y-4">
            <nav>
              <ul>
                {navList.map((list, key) => (
                  <li
                    key={key}
                    className="group block list-disc rounded-lg p-2 text-lg hover:bg-primary"
                  >
                    <Link href={list.href} className="group-hover:text-white">
                      {list.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="block sm:hidden">
              <CTA />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function CTA() {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {/* <Button className="h-9 rounded-full border border-black bg-transparent px-3 text-xs text-black hover:text-white lg:h-10 lg:px-4 lg:text-sm">
        <Smartphone />
        <span>+91 999 999 9999</span>
      </Button> */}
      <HovermeButton text="GET A QUOTE" />
    </div>
  );
}
