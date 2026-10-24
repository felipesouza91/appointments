import {
  CalendarBlankIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CloudSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  TrashIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

const ICON_OPTIONS = {
  SunHorizen: <SunHorizonIcon size={32} weight="bold" />,
  CloudSun: <CloudSunIcon size={32} weight="bold" />,
  UseSquare: <UserSquareIcon size={32} weight="bold" />,
  MoonStars: <MoonStarsIcon size={32} weight="bold" />,
  CaretDown: <CaretDownIcon size={32} weight="bold" />,
  CalendarBlank: <CalendarBlankIcon size={32} weight="bold" />,
  CaretRight: <CaretRightIcon size={32} weight="bold" />,
  CaretLeft: <CaretLeftIcon size={32} weight="bold" />,
  Trash: <TrashIcon size={32} weight="bold" />,
};

const iconButtonVarriant = cva(
  ` p-2 cursor-pointer active:opacity-40 hover:opacity-95`,
  {
    variants: { size: { md: "p-2" } },
    defaultVariants: { size: "md" },
  },
);

type IconOptions = keyof typeof ICON_OPTIONS;

interface IconButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof iconButtonVarriant> {
  icon: IconOptions;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size,
  className,
  ...rest
}) => {
  return (
    <button className={cx(iconButtonVarriant({ size }), className)} {...rest}>
      {ICON_OPTIONS[icon]}
    </button>
  );
};

export default IconButton;
