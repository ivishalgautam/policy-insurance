"use client";

import Logo from "./logo";
import { Muted } from "./ui/typography";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 pt-8">
      <div className="container space-y-4">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="col-span-4 rounded-3xl bg-slate-800 p-8"></div>
          <div className="col-span-8 rounded-3xl bg-slate-800 p-8">
            <div className="items-start justify-between space-y-8 sm:flex sm:space-y-0">
              <div className="space-y-3">
                <Logo className={"text-white"} />
                <div>
                  <Muted className={"text-sm text-slate-300"}>
                    +91 999 999 9999 / Toll Free
                  </Muted>
                  <Muted className={"text-sm text-slate-300"}>
                    enquiry@gmail.com
                  </Muted>
                </div>

                <div className="!mt-8">
                  <Socials />
                </div>
              </div>

              <div>
                <UsefullLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm font-medium">
          Copyright© {new Date().getFullYear()}. onePolicy. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  return (
    <div className="flex items-center justify-start gap-2">
      {[FaFacebookF, RiInstagramFill, FaLinkedinIn, FaSquareXTwitter].map(
        (Item, key) => (
          <Button
            size="icon"
            className="size-8 rounded-full bg-white hover:bg-white"
            key={key}
          >
            <Item className="text-slate-800" />
          </Button>
        ),
      )}
    </div>
  );
}

function UsefullLinks() {
  return (
    <div className="flex gap-8">
      <ul className="space-y-2 text-sm text-white">
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            About Us
          </Link>
        </li>
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            Pricing
          </Link>
        </li>
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="space-y-2 text-sm text-white">
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            Careers
          </Link>
        </li>
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            Blogs
          </Link>
        </li>
        <li>
          <Link href={"#"} className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}
