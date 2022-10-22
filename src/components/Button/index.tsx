import { Slot } from "@radix-ui/react-slot";

import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { asChild = false, children, onClick } = props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      onClick={onClick}
      className="w-full py-4 px-3 bg-cyan-500 rounded transition-colors hover:bg-cyan-300 focus:ring-2 ring-white text-black font-semibold text-sm"
    >
      {children}
    </Comp>
  );
};
