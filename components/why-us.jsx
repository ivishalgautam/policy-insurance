import React from "react";
import { H3, H6, Small } from "./ui/typography";
import { HovermeButton } from "./ui/hover-me-button";
import Heading from "./heading";
import FadeUp from "./fade-up";
import Balancer from "react-wrap-balancer";
import { whyChooseUs } from "@/data/data";

export default function WhyUs() {
  return (
    <section className="bg-[#463861] py-16">
      <div className="container space-y-16 text-white">
        <H3 className={"font-merriweather"}>Why Us?</H3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
          {whyChooseUs.map((item, key) => (
            <FadeUp key={key} y={20} delay={key * 0.2}>
              <div className="space-y-2 md:space-y-6">
                <Small
                  className={"font-merriweather font-medium text-white/70"}
                >
                  {item.subheading}
                </Small>
                <Heading text={item.heading} />
                <p className="text-sm text-white/70">
                  <Balancer>{item.paragraph}</Balancer>
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
