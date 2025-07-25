import  { FC } from "react";

export const ToggleIcon: FC<{ isOpen: boolean; rightArrow: any; downArrow: any }> = ({ isOpen, rightArrow, downArrow }) => {
  const Icon = isOpen ? downArrow : rightArrow;
  return <Icon className="~w-4 ~h-4 ~text-neutral-500" />;
};
