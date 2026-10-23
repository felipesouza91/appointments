import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";
const inputTextVarriant = cva(
  `
    flex flex-row gap-2 items-center px-3 border border-gray-500 rounded-lg
     focus-within:border-yellow-dark active:border-yellow-dark
  `,
  {
    variants: {
      size: {
        md: "h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputTextProps
  extends
    Omit<React.ComponentProps<"input">, "disabled" | "size">,
    VariantProps<typeof inputTextVarriant> {
  icon?: React.ReactNode;
}

const InputText: React.FC<InputTextProps> = ({
  size,
  className,
  icon,
  ...props
}) => {
  return (
    <div className={inputTextVarriant({ size })}>
      {icon && (
        <div className=" flex items-center justify-center size-5 text-yellow-dark">
          {icon}
        </div>
      )}
      <input
        {...props}
        className={cx(
          "h-fit text-base text-gray-200 border-none focus:outline-none placeholder:text-base placeholder:text-gray-400 ",
          className,
        )}
      />
    </div>
  );
};

export default InputText;
