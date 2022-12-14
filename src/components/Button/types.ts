import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
  onClick: VoidFunction;
};
