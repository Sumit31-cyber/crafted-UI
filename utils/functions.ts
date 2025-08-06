import { GAP } from "@/app/(deleteAnimation)/Components/AllMemoirs";
import { _horizontalPadding, SCREEN_WIDTH } from "./constant";

export const getCardWidth = () => {
  return (SCREEN_WIDTH - _horizontalPadding * 2 - GAP) / 2;
};

export const getCardHeight = () => {
  return SCREEN_WIDTH * 0.65;
};
