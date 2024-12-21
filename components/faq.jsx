"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const tabs = [
  {
    question: "What is my deductible?",
    answer:
      "Your annual deductible is $1,000 for individual coverage and $2,000 for family coverage.",
  },
  {
    question: "How do I find in-network providers?",
    answer:
      "You can find in-network providers by using our online provider directory or calling our customer service number.",
  },
  {
    question: "Are pre-existing conditions covered?",
    answer:
      "Yes, pre-existing conditions are covered under this policy as required by the Affordable Care Act.",
  },
  {
    question: "How can I submit a claim?",
    answer:
      "You can submit claims online through our member portal, by mail, or by fax. Most in-network providers will submit claims on your behalf.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(tabs[0]);

  const handleClick = async (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };
  return (
    <>
      <h2 className="mb-4 text-center font-merriweather text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="h-fit rounded-lg border bg-white p-2 dark:bg-[#111111]">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== tabs.length - 1 ? "border-b" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <button
              className={`flex w-full cursor-pointer items-center gap-2 p-3 px-2 font-merriweather text-xs font-semibold text-black transition-all dark:text-white sm:text-base`}
            >
              <Plus
                className={`${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                } h-5 w-5 text-gray-600 transition-transform ease-in-out dark:text-gray-200`}
              />
              {tab.question}
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.14,
                  }}
                >
                  <p
                    className={`w-[90%] p-3 pt-0 text-xs text-black dark:text-white sm:text-sm xl:text-base`}
                  >
                    {tab.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
}
