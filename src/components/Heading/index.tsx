import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

import { HeadingProps } from "./types";

export const Heading = (props: HeadingProps) => {
  const { size = "md", asChild = false, children } = props;

  const HEADING_SIZES = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(`text-gray-100 font-bold font-sans`, {
        [HEADING_SIZES[size]]: true,
      })}
    >
      {children}
    </Comp>
  );
};
