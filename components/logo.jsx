import { cn } from "@/lib/utils";
import { Handshake } from "lucide-react";
import React from "react";

export default function Logo({ iconClassName, className, iconSize = 30 }) {
  return (
    <div className="flex items-center gap-2">
      <Handshake
        className={cn("text-primary", iconClassName)}
        size={iconSize}
      />
      <span className={cn("text-2xl font-extrabold", className)}>
        onePolicy
      </span>
    </div>
  );
}
