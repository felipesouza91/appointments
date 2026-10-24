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
  SunHorizen: (size: number) => <SunHorizonIcon size={size} weight="bold" />,
  CloudSun: (size: number) => <CloudSunIcon size={size} weight="bold" />,
  UseSquare: (size: number) => <UserSquareIcon size={size} weight="bold" />,
  MoonStars: (size: number) => <MoonStarsIcon size={size} weight="bold" />,
  CaretDown: (size: number) => <CaretDownIcon size={size} weight="bold" />,
  CalendarBlank: (size: number) => (
    <CalendarBlankIcon size={size} weight="bold" />
  ),
  CaretRight: (size: number) => <CaretRightIcon size={size} weight="bold" />,
  CaretLeft: (size: number) => <CaretLeftIcon size={size} weight="bold" />,
  Trash: (size: number) => <TrashIcon size={size} weight="bold" />,
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
  iconSize: number;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size,
  iconSize,
  className,
  ...rest
}) => {
  return (
    <button className={cx(iconButtonVarriant({ size }), className)} {...rest}>
      {ICON_OPTIONS[icon](iconSize)}
    </button>
  );
};

export default IconButton;
