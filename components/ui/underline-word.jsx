import { cn } from "@/lib/utils";
import React from "react";

export default function UnderlineWord({ children, className }) {
  return (
    <span
      className={cn(
        "relative before:absolute before:bottom-1 before:left-0 before:w-full before:h-[5px] before:rounded-lg before:bg-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
