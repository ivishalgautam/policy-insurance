"use client";

import Logo from "./logo";
import { H4, H6, Muted } from "./ui/typography";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Footer() {
  return (
    <footer className="bg-primary-100 py-4 pt-8">
      <div className="container space-y-4">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-2 rounded-3xl bg-secondary p-6 text-center lg:col-span-4 lg:p-8">
            <H4 className={"font-merriweather text-white"}>
              Lorem, ipsum dolor.
            </H4>
            <Muted className="text-sm text-white">
              <Balancer>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                ratione expedita iusto, exercitationem perspiciatis ipsum.
              </Balancer>
            </Muted>
          </div>
          <div className="rounded-3xl bg-secondary p-6 lg:col-span-8 lg:p-8">
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

        <div className="text-center text-xs font-medium sm:text-sm">
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
            <Item className="text-secondary" />
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
