import type { FC } from "react";
import { IconType } from "./types";
export const ToggleIcon: FC<{
  isOpen: boolean;
  rightArrow: IconType;
  downArrow: IconType;
}> = ({ isOpen, rightArrow, downArrow }) => {
  const Icon = isOpen ? downArrow : rightArrow;
  return <Icon className="~w-4 ~h-4 ~text-neutral-500" />;
};
