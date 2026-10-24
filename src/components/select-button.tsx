import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

interface SelectButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof selectButtonVarriant> {
  title: string;
  isSelected?: boolean;
}

const selectButtonVarriant = cva(
  `
    flex items-center justify-center p-3 text-gray-200 text-base/normal font-bold rounded-lg cursor-pointer border hover:bg-gray-500 border-gray-500 bg-gray-600
  `,
  {
    variants: {
      variant: {
        primary: "bg-gray-600",
      },
      size: {
        md: "h-14",
      },
      disabled: {
        true: "bg-transparent text-gray-500 hover:cursor-not-allowed hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
      size: "md",
    },
  },
);

const SelectButton: React.FC<SelectButtonProps> = ({
  disabled,
  variant,
  title,
  size,
  isSelected = false,
  ...rest
}) => {
  return (
    <button
      className={cx(
        selectButtonVarriant({ disabled, variant, size }),
        isSelected && !disabled && `border-yellow text-yellow`,
      )}
      disabled={disabled === null ? undefined : disabled}
      {...rest}
    >
      {title}
    </button>
  );
};

export default SelectButton;
