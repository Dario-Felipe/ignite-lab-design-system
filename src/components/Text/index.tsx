import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

import { TextProps } from "./types";

export const Text = (props: TextProps) => {
  const { size = "md", asChild = false, children } = props;

  const TEXTS_SIZES = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-md",
  };

  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(`text-gray-100 font-sans`, {
        [TEXTS_SIZES[size]]: true,
      })}
    >
      {children}
    </Comp>
  );
};
