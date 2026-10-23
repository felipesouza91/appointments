import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonVarriant> {
  title: string;
}

const buttonVarriant = cva(
  `
    flex items-center justify-center  w-full text-gray-900 text-sm/normal font-bold rounded-lg cursor-pointer hover:border-2 hover:border-yellow-light
  `,
  {
    variants: {
      variant: {
        primary: "bg-yellow",
      },
      size: {
        md: "h-14  ",
      },
      disabled: {
        true: "opacity-50 hover:cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
      size: "md",
    },
  },
);

const Button: React.FC<ButtonProps> = ({
  disabled,
  variant,
  title,
  size,
  ...rest
}) => {
  return (
    <button
      className={buttonVarriant({ disabled, variant, size })}
      disabled={disabled === null ? undefined : disabled}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
