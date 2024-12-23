import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        "border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <Avatar>
          <AvatarImage
            src={"/images/avatar.webp"}
            alt="@shadcn"
            loading="lazy"
            width={50}
            height={50}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
