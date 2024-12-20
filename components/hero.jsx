import React from "react";
import UnderlineWord from "./ui/underline-word";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logos } from "./logo-marquee";
import FadeUp from "./fade-up";

export default function Hero() {
  return (
    <section className="flex items-center justify-center pt-32">
      <div className="container min-h-screen w-full space-y-16">
        <div>
          <h1 className="text-center font-merriweather text-4xl font-extrabold tracking-wide lg:text-6xl">
            <Balancer>
              Empower Your <UnderlineWord>Future</UnderlineWord> with Smart
              &nbsp;
              <UnderlineWord>Investments</UnderlineWord>
            </Balancer>
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full md:col-span-6 lg:col-span-4">
            <FadeUp x={-20}>
              <Card bgGradient>
                <figure className="h-[466px] overflow-hidden rounded-3xl">
                  <Image
                    src={"/images/banner/1.webp"}
                    width={200}
                    height={200}
                    alt=""
                    className="h-full w-full object-cover object-center grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
                    priority
                  />
                </figure>
              </Card>
            </FadeUp>
          </div>

          <FadeUp
            y={20}
            className="order-first col-span-full grid h-auto min-h-44 grid-cols-12 gap-6 md:col-span-12 lg:order-none lg:col-span-4"
          >
            <div className="col-span-12 flex w-full items-center justify-center rounded-3xl bg-primary-500 md:col-span-4 lg:col-span-12">
              <Card arrowPosition={"bottom-right"}>
                <div className="flex h-full items-center p-4 text-start text-2xl font-bold lg:text-3xl">
                  Transform Your Finances—The Journey Begins Now!
                </div>
              </Card>
            </div>

            <div className="col-span-12 w-full rounded-3xl bg-primary-500 md:col-span-8 lg:col-span-12">
              <Card arrowPosition={"bottom-right"}>
                <div className="flex h-full items-center p-4 text-start text-2xl font-bold lg:text-3xl">
                  Empower Your Future: Financial Prosperity Starts Here
                </div>
              </Card>
            </div>
          </FadeUp>
          <div className="col-span-full md:col-span-6 lg:col-span-4">
            <FadeUp x={20}>
              <Card bgGradient>
                <figure className="h-[466px] overflow-hidden rounded-3xl">
                  <Image
                    src={"/images/banner/2.jpeg"}
                    width={200}
                    height={200}
                    alt=""
                    className="h-full w-full object-cover object-center grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
                    priority
                  />
                </figure>
              </Card>
            </FadeUp>
          </div>
        </div>

        {/*  logo marquee*/}
        <div>
          <Logos />
        </div>
      </div>
    </section>
  );
}

function Card({ children, arrowPosition = "top-right", bgGradient = false }) {
  return (
    <div
      className={cn(
        "group relative h-full w-full cursor-pointer transition-all before:rounded-3xl",
        {
          "before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-transparent before:to-primary/50 before:hover:to-primary/60":
            bgGradient,
        },
      )}
    >
      <span
        className={cn(
          "absolute z-10 flex size-12 items-center justify-center rounded-full bg-white",
          {
            "right-4 top-4": arrowPosition === "top-right",
            "left-4 top-4": arrowPosition === "top-left",
            "bottom-4 right-4": arrowPosition === "bottom-right",
            "bottom-4 left-4": arrowPosition === "bottom-left",
          },
        )}
      >
        <MoveUpRight className="transition-transform duration-300 group-hover:rotate-45" />
      </span>
      {children}
    </div>
  );
}
