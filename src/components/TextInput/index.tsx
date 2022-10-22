import { Slot } from "@radix-ui/react-slot";

import {
  TextInputRootProps,
  TextInputInputProps,
  TextInputIconProps,
} from "./types";

const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div className="w-full h-12 flex items-start gap-3 py-3 px-4 rounded bg-gray-800 hover:ring-2 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="flex-1 h-full bg-transparent outline-none text-gray-100 font-sans"
      {...props}
    />
  );
};

TextInputRoot.displayName = "TextInput.Input";

const TextInputIcon = (props: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};

TextInputRoot.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  input: TextInputInput,
  Icon: TextInputIcon,
};
