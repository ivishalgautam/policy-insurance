import React from "react";
import Balancer from "react-wrap-balancer";

export default function Heading({ text }) {
  return (
    <div className="font-merriweather text-2xl font-bold md:text-3xl lg:text-5xl">
      <Balancer>{text}</Balancer>
    </div>
  );
}
