"use client";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    url: "/images/logos/google.svg",
  },
  {
    name: "GitHub",
    url: "/images/logos/github.svg",
  },
  {
    name: "Amazon",
    url: "/images/logos/amazon.svg",
  },
  {
    name: "Netflix",
    url: "/images/logos/netflix.svg",
  },
  {
    name: "YouTube",
    url: "/images/logos/youtube.svg",
  },
  {
    name: "Instagram",
    url: "/images/logos/instagram.svg",
  },
  {
    name: "Spotify",
    url: "/images/logos/spotify.svg",
  },
];

export function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING COMPANIES
        </h3>
        <div className="relative mt-6">
          <Marquee
            className="[--duration:40s] [--gap:0px] sm:[--gap:1rem]"
            pauseOnHover
          >
            {companies.map((company, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={company.url}
                className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-primary-100"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary-100"></div>
        </div>
      </div>
    </section>
  );
}
