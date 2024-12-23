import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Muted, Small } from "../ui/typography";
import Heading from "../heading";
import { HovermeButton } from "../ui/hover-me-button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import FadeUp from "../fade-up";

export default function InsuranceCard({
  small = "Lorem ipsum dolor sit.",
  heading = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.",
  paragraphs = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, corporis. Voluptatum eum velit dolorum mollitia nemo cupiditate illum dolorem nostrum, labore possimus ducimus! Eius, suscipit?",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, corporis. Voluptatum eum velit dolorum mollitia nemo cupiditate illum ",
  ],
  imgUrl,
  className = "",
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl items-center justify-center gap-8 space-y-10 text-center md:flex md:text-start lg:space-y-0",
        className,
      )}
    >
      <FadeUp x={-20} className="flex-2 lg:flex-1">
        <div>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <FaPlusSquare className="text-primary" size={30} />
              <Muted className={"text-xs sm:text-sm"}>{small}</Muted>
            </div>

            <Heading text={heading} />

            {paragraphs.map((para, ind) => (
              <p key={ind} className="text-sm">
                <Balancer>{para}</Balancer>
              </p>
            ))}
            <HovermeButton text="GET A QUOTE" />
          </div>
        </div>
      </FadeUp>

      <FadeUp x={20} className="flex-2 lg:flex-1">
        <div className={cn("flex items-center lg:justify-center")}>
          <figure className="mx-auto size-[300px] overflow-hidden rounded-2xl md:mx-0 lg:size-[400px]">
            <Image
              src={imgUrl}
              width={400}
              height={400}
              alt={heading}
              className="h-full w-full object-cover object-center"
              priority
            />
          </figure>
        </div>
      </FadeUp>
    </div>
  );
}
