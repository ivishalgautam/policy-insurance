import React from "react";
import { H3, H6, Small } from "./ui/typography";
import { HovermeButton } from "./ui/hover-me-button";
import Heading from "./heading";
import FadeUp from "./fade-up";

export default function WhyUs() {
  return (
    <section className="bg-[#463861] py-16">
      <div className="container space-y-16 text-white">
        <H3 className={"font-merriweather"}>Why Us?</H3>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
          {Array.from({ length: 3 }).map((_, key) => (
            <FadeUp key={key} y={20} delay={key * 0.2}>
              <div className="space-y-6">
                <Small className={"font-medium text-white/70"}>
                  Simplicity
                </Small>
                <Heading text={"Lorem ipsum dolor sit amet consectetur."} />
                <p className="text-sm text-white/70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque ea dicta dolorem! Animi quibusdam aliquid nostrum
                  placeat a ducimus cumque?
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp y={20}>
          <HovermeButton text="GET A QUOTE" />
        </FadeUp>
      </div>
    </section>
  );
}
