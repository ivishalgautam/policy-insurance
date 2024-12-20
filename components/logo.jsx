import { cn } from "@/lib/utils";
import { Handshake } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo({ iconClassName, className, iconSize = 30 }) {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <Handshake
          className={cn("text-primary", iconClassName)}
          size={iconSize}
        />
        <span className={cn("text-2xl font-extrabold", className)}>
          onePolicy
        </span>
      </div>
    </Link>
  );
}
